-- Insert users
INSERT INTO "Users" ("usersId", "username", "password", "firstName", "lastName", "email", "phoneNumber", "address")
VALUES (1, 'john_doe', 'password123', 'John', 'Doe', 'john.doe@email.com', '1234567890', '123 Main St'),
       (2, 'jane_doe', 'pass456', 'Jane', 'Doe', 'jane.doe@email.com', '9876543210', '456 Oak St'),
       (3, 'bob_smith', 'secure789', 'Bob', 'Smith', 'bob.smith@email.com', '5551234567', '789 Pine St');

-- Insert payment methods
INSERT INTO "PaymentMethods" ("paymentMethodsId", name)
VALUES (1, 'Credit Card'),
       (2, 'PayPal'),
       (3, 'Debit Card'),
       (4, 'Google Pay');;

-- Insert users' payment methods
INSERT INTO "UsersPaymentMethod" ("usersId", "paymentMethodsUser", "details")
VALUES (1, 1, 'Credit Card ending in 1234'),
       (1, 2, 'john_doe_paypal@email.com'),
       (2, 3, 'Debit Card ending in 5678'),
       (3, 4, 'bob_smith_googlepay@email.com');

-- Insert items
INSERT INTO "Items" ("itemId", "productName", "price", "description", "stockQuantity", "type")
VALUES (1, 'Intel Core i9-9900K', 499.99, '8-core, 16-thread processor', 10, 'CPU'),
       (2, 'NVIDIA GeForce RTX 3080', 699.99, '10GB GDDR6X graphics card', 5, 'GPU'),
       (3, 'AMD Ryzen 7 5800X', 399.99, '8-core, 16-thread processor', 8, 'CPU'),
       (4, 'NVIDIA GeForce GTX 1660', 299.99, '6GB GDDR5 graphics card', 7, 'GPU');

-- Insert PCs
INSERT INTO "PC" ("PCId", "productName", "price", "type", "stockQuantity")
VALUES (1, 'Gaming PC - High Performance', 1999.99, 'Custom', 3),
       (2, 'Office PC - Standard', 899.99, 'Standard', 5),
       (3, 'Workstation PC - Professional', 1499.99, 'Custom', 4),
       (4, 'Gaming PC - Budget', 599.99, 'Standard', 6);

-- Insert orders

-- Insert order items

-- Insert order PCs

-- Insert compatibility between items
INSERT INTO "Compatibility" ("itemId", "compatibleWithItemId")
VALUES (1, 2),
       (2, 1),
       (3, 4),
       (4, 3);;

-- Insert PC composition
INSERT INTO "PCComposition" ("PCId", "itemId", "quantityiItem")
VALUES (1, 1, 1),
       (1, 2, 1),
       (2, 2, 1),
       (3, 3, 1),
       (3, 4, 1),
       (4, 4, 1);
