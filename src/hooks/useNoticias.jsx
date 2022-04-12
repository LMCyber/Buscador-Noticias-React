import { useContext } from 'react'
import NoticiasContext from '../context/NoticiasPorvider'

const useNoticias = () => {
  return useContext(NoticiasContext)
}

export default useNoticias
