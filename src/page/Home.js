import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import Homecard from '../component/Homecard';
import CardFeatures from '../component/CardFeatures';
import { GrPrevious, GrNext } from 'react-icons/gr'
import AllProduct from '../component/AllProduct';
import bike from '../assest/bikeIcon.jpeg'
const Home = () => {
  const productData = useSelector((state) => state.products.productList)
  console.log(productData);
  const homeProductCartList = productData.slice(1, 5)
  const homeProductCartListVegetables = productData.filter(el => el.category === "vegetdable", [])
  console.log(homeProductCartListVegetables);
  const homeProductCartListFruits = productData.filter(el => el.category === "fruites", [])
  const homeRiceAttaDalCartListFruits = productData.filter(el => el.category === "Rice, Atta & Dal", [])
  const homeDrinksJuicesCartListFruits = productData.filter(el => el.category === "Drinks & Juices", [])
  const homeHealthNutritionCartListFruits = productData.filter(el => el.category === "Health & Nutrition", [])
  const homeTeaCoffeeCartList = productData.filter(el => el.category === "Tea & Coffee", [])
  const homeInstantfoodCartListFruits = productData.filter(el => el.category === "Instant food", [])
  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)
  const slideInstantfoodRef = useRef()
  const nextInstantfood = () => {
    slideInstantfoodRef.current.scrollLeft += 200
  }
  const prevInstantfood = () => {
    slideInstantfoodRef.current.scrollLeft -= 200

  }
  const slideTeaCoffeeRef = useRef()
  const nextTeaCoffee = () => {
    slideTeaCoffeeRef.current.scrollLeft += 200
  }
  const prevTeaCoffee = () => {
    slideTeaCoffeeRef.current.scrollLeft -= 200

  }
  const slideHealthNutritionRef = useRef()
  const nextHealthNutrition = () => {
    slideHealthNutritionRef.current.scrollLeft += 200
  }
  const prevHealthNutrition = () => {
    slideHealthNutritionRef.current.scrollLeft -= 200

  }
  const slideDrinksJuicesRef = useRef()
  const nextDrinksJuices = () => {
    slideDrinksJuicesRef.current.scrollLeft += 200
  }
  const prevDrinksJuices = () => {
    slideDrinksJuicesRef.current.scrollLeft -= 200

  }
  const slideRiceAttaDalRef = useRef()
  const nextRiceAttaDal = () => {
    slideRiceAttaDalRef.current.scrollLeft += 200
  }
  const prevRiceAttaDal = () => {
    slideRiceAttaDalRef.current.scrollLeft -= 200

  }

  const slideProductRef = useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200

  }

  const slideFruitsRef = useRef()
  const nextFruits = () => {
    slideFruitsRef.current.scrollLeft += 200
  }
  const prevFruits = () => {
    slideFruitsRef.current.scrollLeft -= 200

  }

  const categoryList = [...new Set(productData.map(el => el.category))]
  console.log(categoryList);
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2  '>

        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>

            <img src={bike} className='h-7' />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3 '>The Fast Delivery in <span className='text-red-600 text'>Your home</span></h2>
          <p className='py-3 text-base'>Experience the convenience of fast delivery right to your doorstep with our grocery shop.  more delivered straight to your home in no time. Our efficient delivery team ensures that your orders arrive swiftly, allowing you to stock up on all your favorite items without any hassle. Say goodbye to long queues and tedious shopping trips – simply place your order online, sit back, and let us take care of the rest. Experience the ease of shopping from the comfort of your home with our fast and reliable delivery service.</p>
          <button className='font-bold bg-red-500 text-slate-200 px-3 py-2 rounded-md'>Order Now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCartList[0] ? homeProductCartList.map(el => {
              return (
                <Homecard
                  key={el.id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              )
            })
              :
              loadingArray.map((el, index) => {
                return (
                  <Homecard
                    key={index}
                    loading={"loading.."}
                  />
                )
              })
          }
        </div>
      </div>

      <div>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fruits</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={prevFruits} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextFruits} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideFruitsRef}>
          {homeProductCartListFruits[0] ?
            homeProductCartListFruits.map(el => {
              return (
                <CardFeatures
                  key={el.id + 'vegetables'}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            })
            :
            loadingArrayFeature.map((el, index) => (< CardFeatures loading='loading...' key={index + 'cartloading'} />))
          }
        </div>

      </div>
      <div>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Rice, Atta & Dal</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={prevRiceAttaDal} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextRiceAttaDal} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideRiceAttaDalRef}>
          {homeRiceAttaDalCartListFruits[0] ?
            homeRiceAttaDalCartListFruits.map(el => {
              return (
                <CardFeatures
                  key={el.id + 'Rice, Atta & Dal'}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            })
            :
            loadingArrayFeature.map((el, index) => (< CardFeatures loading='loading...' key={index + 'cartloading'} />))
          }
        </div>

      </div>
      <div>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Health & Nutrition</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={prevHealthNutrition} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextHealthNutrition} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideHealthNutritionRef}>
          {homeHealthNutritionCartListFruits[0] ?
            homeHealthNutritionCartListFruits.map(el => {
              return (
                <CardFeatures
                  key={el.id + 'Health & Nutrition'}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            })
            :
            loadingArrayFeature.map((el, index) => (< CardFeatures loading='loading...' key={index + 'cartloading'} />))
          }
        </div>

      </div>
      <div>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Instant food</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={prevInstantfood} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextInstantfood} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideInstantfoodRef}>
          {homeInstantfoodCartListFruits[0] ?
            homeInstantfoodCartListFruits.map(el => {
              return (
                <CardFeatures
                  key={el.id + 'Instant food'}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            })
            :
            loadingArrayFeature.map((el, index) => (< CardFeatures loading='loading...' key={index + 'cartloading'} />))
          }
        </div>

      </div>
      <div>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Tea & Coffee</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={nextTeaCoffee} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextRiceAttaDal} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideTeaCoffeeRef}>
          {homeTeaCoffeeCartList[0] ?
            homeTeaCoffeeCartList.map(el => {
              return (
                <CardFeatures
                  key={el.id + 'Tea & Coffee'}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            })
            :
            loadingArrayFeature.map((el, index) => (< CardFeatures loading='loading...' key={index + 'cartloading'} />))
          }
        </div>

      </div>
      <div>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Drinks & Juices</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={prevDrinksJuices} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextDrinksJuices} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideDrinksJuicesRef}>
          {homeDrinksJuicesCartListFruits[0] ?
            homeDrinksJuicesCartListFruits.map(el => {
              return (
                <CardFeatures
                  key={el.id + 'Drinks & Juices'}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            })
            :
            loadingArrayFeature.map((el, index) => (< CardFeatures loading='loading...' key={index + 'cartloading'} />))
          }
        </div>

      </div>
      <div>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegetdable</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={prevProduct} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextProduct} className='bg-slat-300 hover:bg-slat-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {homeProductCartListVegetables[0] ?
            homeProductCartListVegetables.map(el => {
              return (
                <CardFeatures
                  key={el.id + 'vegetable'}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            })
            :
            loadingArrayFeature.map((el, index) => (< CardFeatures loading='loading...' key={index + 'cartloading'} />))
          }
        </div>

      </div>
      <AllProduct heading={"Your Product"} />
    </div>
  )
}

export default Home