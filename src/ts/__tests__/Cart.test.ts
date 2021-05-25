import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";
import Book from "../domain/Book";

test("new card should be empty", () => {
  const cart = new Cart();
  cart.add(
    new Movie(
      123,
      "Мстители",
      2000,
      2010,
      "США",
      "Аверджес что тот там",
      "Fantastic",
      2.3,
      "imax",
      "www.kinopimagimage.jpg"
    )
  );
  expect(cart.items.length).toBe(1);
});

test("Test getPrice 2 elem", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

  expect(cart.getPrice()).toBe(2900);
});

test("Test getPriceDiscount 20%", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

  expect(cart.getPriceDiscount(20)).toBe(2320);
});
test("Test Dell item from ID", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.dellItem(1001);
  expect(cart.items.length).toBe(1);
});
test("Test Dell item from ID Undefind", () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  expect(() => cart.dellItem(1002)).toThrow("id не найден");
});
