import {
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { createdAt, id, updatedAt } from '../schemaHelpers';
import { UserTable } from './user';
import { ProductTable } from './product';
import { relations } from 'drizzle-orm';

export const PurchaseTable = pgTable('purchases', {
  id,
  // it's in cents because Stripe uses cents
  pricePaidInCents: integer().notNull(),
  // the reason why we're storing the product details even though we already have
  // `productId` is because the product could change. By storing the old details,
  // the user can recall which product they've bought if the product's details have
  // been changed to something different.
  productDetails: jsonb()
    .notNull()
    .$type<{ name: string; description: string; imageUrl: string }>(),
  userId: uuid()
    .notNull()
    .references(() => UserTable.id, { onDelete: 'restrict' }),
  productId: uuid()
    .notNull()
    .references(() => ProductTable.id, { onDelete: 'restrict' }),
  stripeSessionId: text().notNull().unique(),
  refundedAt: timestamp({ withTimezone: true }),
  createdAt,
  updatedAt,
});

export const PurchaseRelationships = relations(PurchaseTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [PurchaseTable.userId],
    references: [UserTable.id],
  }),
  product: one(ProductTable, {
    fields: [PurchaseTable.productId],
    references: [ProductTable.id],
  }),
}));
