
export const HomePage = () => {
  return (
    <section>
      <section className='w-full py-6 bg-white flex justify-between items-center'>
        
        <section className='px-20'>
          <h1 className='text-7xl font-bold leading-tight'>ORGANIC FOOD<br />
            <span className='font-light'>& HEALTHY TASTE</span></h1>
        </section>

        <section className='px-10 min-h-96'>
          <img src="./grocery-bag.png" alt="Grocery Bag" />
        </section>

        {/* <img src="./green-yellow.png" alt="" className='absolute right-0' /> */}
      </section>
    </section>
  )
}
