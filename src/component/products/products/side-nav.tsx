import React from 'react'

function ProductSideNav() {
    const categoryFilterList = [
        { name: 'Top (657)' },
        { name: 'Dresses (306)' },
        { name: 'TShirts (309)' },
        { name: 'Trousers (140)' },
        { name: 'Jeans (139)' },
        { name: 'Sweatshirts (554)' },
        { name: 'Leggings (486)' },
    ]

    const priceRange = [
        { name: '$10 to $ 100 (20)' },
        { name: '$100 to $500 (40)' },
        { name: '$500 to $ 5000 (8)' },
    ]

    const colors = [
        { name: 'Green', hexCode: '#28a745' },      // Bootstrap green
        { name: 'Pink', hexCode: '#e83e8c' },       // Vibrant pink
        { name: 'Blue', hexCode: '#007bff' },       // Bootstrap blue
        { name: 'Red', hexCode: '#dc3545' },        // Bootstrap red
        { name: 'Black', hexCode: '#000000' },      // Pure black
        { name: 'Navy Blue', hexCode: '#001f3f' },  // Deep navy 
    ];
  return (
    <div>
        <div>Filters</div>
        <div>
            <div>Categories</div>
            <div>
                <input type="text" className='input' placeholder='Search for Colur' />
                <div>
                    {categoryFilterList.map((item, index) => {
                        return (
                            <div key={index} className='flex gap-3 px-3 py-2 my-1 border border-gray-300'>
                                <input type="checkbox" className='checkbox' />
                                <div>{item.name}</div>
                            </div>
                        )
                    })}
                    <div className='font-bold'>+10 More</div>
                </div>
                <div className='divider'></div>
                <div>
                    <div>Price</div>
                    {priceRange.map((item, index) => {
                        return (
                            <div key={index} className='flex gap-3 px-3 py-2 my-1 border border-gray-300'>
                                <input type="checkbox" className='checkbox' />
                                <div>{item.name}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='divider'></div>
                <div>
                    <div>Color</div>
                    {colors.map((item, index) => {
                        return (
                            <div key={index} className='flex gap-3 px-3 py-2 my-1 border border-gray-300'>
                                <input type="checkbox" className='checkbox' />
                                <div className='w-full'>
                                    <div className='flex justify-between'>
                                        <div>{item.name}</div>
                                        <div className={`w-5 h-5 bg-[${item.hexCode}]`}> </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProductSideNav