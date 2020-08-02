import Cart from '../service/Cart';
import Book from '../domain/Book';
import Phone from '../domain/Phone';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('the number of card elements must be 1', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items.length).toBe(1);
});

test('the number of card elements must be 1', () => {
  const cart = new Cart();
  const phone = new Phone(1001, 'Nokia', 1000);
  cart.add(phone);
  cart.add(phone);
  expect(cart.items.length).toBe(1);
});

test('card should be empty', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.delete(1001);
  expect(cart.items.length).toBe(0);
});

test('the number of card elements must be 1', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.delete(1001);
  expect(cart.items.length).toBe(1);
});

test('when adding the prices of different goods, the sum should be 4000', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.calculateTotalPrice()).toBe(4000);
});

test('when adding the prices of the same goods, the amount should be 4000', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.calculateTotalPrice()).toBe(4000);
});

test('total discounted price must be 3000', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.calculateTotalDiscountedPrice(1000)).toBe(3000);
});