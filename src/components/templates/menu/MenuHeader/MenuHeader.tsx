import React from 'react'

const MenuHeader:React.FC = ()=>{
  return (
    <section className="py-12">
        <div className="container mx-auto px-8">
            <div className="mb-10 text-center">
                <h1 className='mb-4 text-4xl font-sansBold font-black'>منو کافی شاپ نیک</h1>
                <p className="text-lg text-muted-foreground">بهترین نوشیدنی ها و دسرها را انتخاب کنید</p>
            </div>
        </div>
    </section>
  )
}

export default MenuHeader