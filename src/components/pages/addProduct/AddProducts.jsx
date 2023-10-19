import { useNavigate } from "react-router-dom";
import NavBar from "../../common/NavBar";
import { BsBoxArrowLeft } from "react-icons/bs";
import toast from "react-hot-toast";

const AddProducts = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandName.value;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const message = form.message.value;
    const addProduct = {
      brandName,
      name,
      imageUrl,
      category,
      price,
      rating,
      message,
    };

    // sending to backEnd
    fetch("https://brand-shop-server-ecru.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product added Successfully");
        form.reset();
      });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto text-right lg:text-left py-8 md:py-12">
        <button
          onClick={handleGoBack}
          className="btn btn-sm text-xs lg:text-base bg-red-800  hover:bg-red-950 text-white rounded-md px-6"
        >
          <BsBoxArrowLeft />
          Home
        </button>
      </div>

      <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto px-4 md:px-10 lg:px-16 xl:px-28 py-10 md:py-16 lg:py-20 bg-[#F4F3F0] mb-16 md:mb-20 lg:mb-28 rounded-md">
        <h3 className="text-4xl md:text-5xl text-center font-Bebas">
          Add your Product
        </h3>
        <p className="text-center text-xs md:text-sm lg:text-base xl:text-lg md:mx-6 lg:mx-10 xl:mx-20 my-5 md:my-8"></p>

        <form onSubmit={handleSubmit} className="font-medium font-Heebo">
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="brandName"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Brand Name
              </label>
              <select
                id="brandName"
                name="brandName"
                className="text-sm rounded-md w-full px-3 py-2 bg-white text-black border focus:border-black focus:bg-white"
                required
              >
                <option>Mercedes-Benz</option>
                <option>BMW</option>
                <option>Tesla</option>
                <option>Ferrari</option>
                <option>Toyota</option>
                <option>Ford</option>
              </select>
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Model Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="text-sm rounded-md w-full px-3 py-2 bg-white text-black border focus:border-black focus-bg-white"
                placeholder="Enter name"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="imageUrl"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                className="text-sm rounded-md w-full px-3 py-2 bg-white text-black border focus:border-black focus-bg-white"
                placeholder="Enter image url"
              />
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="text-sm rounded-md w-full px-3 py-2 bg-white text-black border focus:border-black focus:bg-white"
                required
              >
                <option>Car</option>
                <option>Motorcycle</option>
                <option>Bicycle</option>
                <option>Bus</option>
                <option>Truck</option>
              </select>
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Price ($)
              </label>
              <select
                id="price"
                name="price"
                className="text-sm rounded-md w-full px-3 py-2 bg-white text-black border focus:border-black focus:bg-white"
                required
              >
                <option>500</option>
                <option>1000</option>
                <option>1500</option>
                <option>2000</option>
                <option>3000</option>
                <option>5000</option>
                <option>8000</option>
                <option>10000</option>
                <option>12000</option>
                <option>15000</option>
                <option>18000</option>
                <option>20000</option>
                <option>25000</option>
                <option>30000</option>
                <option>40000</option>
                <option>50000</option>
              </select>
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="rating"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Rating (out of 5)
              </label>
              <select
                id="rating"
                name="rating"
                className="text-sm rounded-md w-full px-3 py-2 bg-white text-black border focus:border-black focus:bg-white"
                required
              >
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold ml-3 mb-2"
            >
              Description
            </label>
            <textarea
              id="message"
              name="message"
              className="rounded-md w-full px-3 py-2 bg-white text-black border focus:border-black overflow-hidden"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-md text-xs lg:text-base bg-red-800 hover:bg-red-950 text-white rounded-md font-Heebo"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;