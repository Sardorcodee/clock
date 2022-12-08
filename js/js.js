// let frutis = [
//     "Apple",
//     "Banana",
//     "piple",
//     "kiwi",
//     "Mandarin",
// ]
// console.log(frutis);
// frutis.pop(); //oxiriga --
// console.log(frutis);
// frutis.shift();//boshiga --
// console.log(frutis);
// frutis.push("Apelsin"); //oxiriga ++
// console.log(frutis);
// frutis.unshift("Ananos"); //boshiga ++
// console.log(frutis);
let products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      count: 1,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-50.jpg?auto=webp&quality=75&width=1024",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      count: 2,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://a.storyblok.com/f/165154/800x800/70e8f9cf61/sell-shirts.jpeg/m/filters:format(webp)",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      count: 1,
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image:
        "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Mens-Jacket-Keanu-Black-110221-2.jpg?v=1636392243",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      count: 2,
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://m.media-amazon.com/images/I/51wn8ZYlukL._AC_UY1000_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      count: 1,
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image:
        "https://i.ebayimg.com/thumbs/images/g/pwoAAOSwOkpjWxki/s-l300.jpg",
      rating: { rate: 4.6, count: 400 },
    },
  ],
  h2 = document.querySelector(".total"),
  total = products.reduce(function (e, t) {
    return e + t.price * t.count;
  }, 0);
h2.innerHTML = `Total: $${total}`;
let row = document.querySelector("#row");
products.forEach((e) => {
  let t = `<div class="col-md-6 col-lg-3">
            <div class="card">
              <img
                src="${e.image}"
                alt="${e.title}"
                class="card-img-top"
              />
              <div class="card-body">
                <h4 class="text-center card-title">
                 ${e.title}
                </h4>
                <p class="card-text">
                  ${e.description}
                </p>
                <div class="d-flex justify-content-between my-3">
                  <span class="category">${e.category}</span>
                  <span class="price badge text-bg-success">$${e.price}</span>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="stars text-warning">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <span>${e.rating.count}/${e.rating.rate}</span>
                </div>
              </div>
              </div>
              </div>`;
  row.innerHTML += t;
});
// ///////////////////////////////////
let nam = ["lkfvlkvn11",9,"dds",8,"lkfcl",6,2,3]
let ll = nam.filter(nam =>typeof nam == "number")
console.log(ll);