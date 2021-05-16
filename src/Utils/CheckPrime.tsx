import React from 'react'

const CheckPrime = (num: any) => {


    for(let i = 0; i < num ; i++){
        if(num % i === 0) {
            return true
        }else{
            return false
        }
    }

}

export default CheckPrime
