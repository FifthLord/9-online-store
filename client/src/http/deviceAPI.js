import { $authHost, $host } from './index';

export const CreateType = async (type) => {
   const { data } = await $authHost.post('api/type', type)
   return data
}

export const fetchTypes = async () => {
   const { data } = await $host.get('api/type')
   return data
}

export const CreateBrand = async (brand) => {
   const { data } = await $authHost.post('api/brand', brand)
   return data
}

export const fetchBrands = async () => {
   const { data } = await $host.get('api/brand')
   return data
}
