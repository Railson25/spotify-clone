"use client"

import { AuthModal } from "@/components/AuthModal"
import { SubscribeModal } from "@/components/SubscribeModal"
import { UploadModal } from "@/components/UploadModal"
import { ProductWithPrice } from "@/types"

interface ModalProviderProps{
    products: ProductWithPrice[]
}

export const ModalProvider = ({products}: ModalProviderProps) => {

    return(
        <>
           <AuthModal />
           <UploadModal />
           <SubscribeModal products={products} />
        </>
    )
}