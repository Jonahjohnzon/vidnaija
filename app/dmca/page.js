import React,{useEffect} from 'react'

const page = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    
    // Set the attributes for the script
    script.src = 'https://arvigorothan.com/tag.min.js';
    script.setAttribute('data-zone', '6809748');

    // Append the script to the body or documentElement (whichever exists)
    const parentElement = document.body || document.documentElement;
    parentElement.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      // Remove the script by accessing its parent node
      parentElement.removeChild(script);
    };
  }, []);
  return (
    <div className=' flex justify-center items-center min-h-[100vh] pt-40 pb-20'>
    <div className=' w-[90%] lg:w-[60%] text-white text-xl'>
        <h1 className=' text-2xl font-bold mb-5' >DMCA</h1>
        <p className=' mb-2'>VidNaija is in compliance with the Digital Millennium Copyright Act ("DMCA"). It is our policy to respond to any infringement notices and take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws.</p>
        <p className=' mb-2'>If your copyrighted material has been uploaded on VidNaija or if hyperlinks to your copyrighted material are returned through our search engine and you want this material removed, you must provide a written communication that details the information listed in the following section.</p>
        <p className=' mb-2 underline'>The following elements must be included in your copyright infringement claim:</p>
        <ul className=' mb-2'>
            <li>1. The following elements must be included in your copyright infringement claim</li>
            <li>2. Provide sufficient contact information so that we may contact you.</li>
            <li>3. You must also include a valid email address.</li>
        </ul>
        <p className=' mb-2'>Send the infringement notice to our <span className=' text-red-500 cursor-pointer'>email address</span></p>
        <p className=' mb-2'>Please allow us 48 hours to get back to you.</p>
        <p>Note that emailing your complaint to other parties such as our Internet Service Provider will not expedite your request and may result in a delayed response due to the complaint not being filed properly.</p>
    </div>
    </div>
  )
}

export default page