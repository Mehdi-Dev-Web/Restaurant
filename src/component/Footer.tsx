
function Footer() {
  return (
    <div className='w-full h-[80vh] relative bg-orange'style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
     }}>
     <div className=" fixed w-full h-[80vh] bottom-0 overflow-hidden ">
        <div className="flex flex-col  w-full h-full ">
            <div className="flex flex-2 w-full h-full pl-10 items-top pt-10 gap-10 text-lightBlack text-sm">
                <ul>
                    <li>mehdi</li>
                    <li>aouinati</li>
                    <li>pfe</li>
                    <li>marrakch</li>
                    <li>morocco</li>
                    <li>excel</li>
                </ul>
                <ul>
                    <li>restaurant</li>
                    <li>front end</li>
                    <li>back end</li>
                    <li>menu</li>
                    <li>that's it</li>
                    <li>anything</li>
                </ul>
            </div>
            <div className="flex-1 flex items-end w-full h-full pb-6 pl-4">
                <h1 className='text-9xl font-bold font-Poppins text-black'>Glow Nght</h1>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer