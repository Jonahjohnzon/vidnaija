"use client"

export const Gets = async(router,sl) =>{
    
    const tok = localStorage.getItem('data')
    if(!tok){
      return router.push("/")
    }
    const token = JSON.parse(tok)
    const data = await fetch(`http://79.133.57.156:8000/check/${token._id}`,
    {
        method:"GET",
        headers:{
            'auth-token':token.token}
    })
    const info = await data.json()
   
    if(!info.auth)
    {
        return router.push("/")
    }
    else{
      if(sl)
      {
        sl(false)
      }
    }
    
  }