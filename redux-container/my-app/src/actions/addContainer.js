export   const addTo=(index)=> ({type: "INCREMENT", index})
export  const decTo=(index)=>(
    {
        type:"DECL",
        index
    }
)

export  const mulTo=(index,mul)=>( {
    type:"MUL",
    index,
    mul
})


export const  dalyTo=(index)=>({
    type: "daly",
    index,
})