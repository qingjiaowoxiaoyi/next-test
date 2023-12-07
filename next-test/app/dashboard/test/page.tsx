'use client'
import { useState,useEffect } from "react";
import Image from 'next/image';
export default function Page() {
    const [data,setData] = useState([]) as any
    let data0 = [] as any
    for(let i = 0;i<10;i++){
                data0.push(i)
            }

    useEffect(()=>{
        setData(data0)
    },[])
    
    return <div>
        {
            data.map((item:number)=>{
                return <div key={item}>{item}
                    <Image src={'https://openfile.meizu.com/group1/M00/00/DF/rBDdKl_WzByAEoFFAAEYoBfWT-M923.jpg680x680.png'} width={680}
                    height={680} alt=''/>
                </div>
            })
        }
    </div>;
}