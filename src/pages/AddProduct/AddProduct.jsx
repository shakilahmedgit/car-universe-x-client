
import Swal from 'sweetalert2'

const AddProduct = () => {


    const handleAddCar = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newAddCar = {name, brand, price, description, rating, photo};
        console.log(newAddCar);

        // send data to the server
        fetch('https://car-universe-x-server-dhgxlr0vn-shakil-ahmeds-projects-043baff6.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Car Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        
    };

    return (
        <div className="bg-[#F4F3F0] px-4 md:p-10 lg:p-24 py-10 ">
            <h2 className=" text-base md:text-3xl font-extrabold mb-5" data-aos="fade-up">Add a New Car</h2>
            <form onSubmit={handleAddCar}>
                {/* form Car Name and brand row */}
                <div className="md:flex gap-5 mb-8" data-aos="fade-up">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="Car Name" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="">
                            <input type="text" name="brand" placeholder="Enter Car brand" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form Price and Description row */}
                <div className="md:flex gap-5 mb-8" data-aos="fade-up">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="">
                            <input type="text" name="price" placeholder="Car Price" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="">
                            <input type="text" name="description" placeholder="Enter Car Description" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form Rating and image URL row */}
                <div className="md:flex gap-5 mb-8" data-aos="fade-up">
                    <div className="form-control md:w-1/2 mb-4 md:mb-0">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="">
                            <input type="text" name="rating" placeholder="Enter Car Rating" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="">
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input  w-full rounded-lg" />
                        </label>
                    </div>
                </div>
                {/* form btn */}
                <input type="submit" value="Add New Car" className="btn btn-block bg-black text-white hover:bg-red-500" />
            </form>
        </div>
    );
};

export default AddProduct;