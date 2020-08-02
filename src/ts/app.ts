import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
debugger;
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
console.log(cart.items.find((elem) => {
  console.log(elem.buyable.id);
  elem.buyable.id === 1001;
}))
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
console.log(cart.items);
