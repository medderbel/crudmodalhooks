import React,{useEffect,useState} from 'react'
import { deleteArticle, fetchArticles } from '../../Services/ArticleService';
import { fetchSCategories } from '../../Services/ScategorieService';
import ArticleList from '../ArticleList';


const ArticlesApp = () => {
const [editingProduct, setEditingProduct] = useState(null);
const [products,setProducts]=useState([])
const [scategories,setScategories]=useState([])
useEffect(() => {
listproduits()
listscategories()
},[products])
const listproduits=()=>{
fetchArticles()
.then(res=>setProducts(res.data))
.catch(err=>console.log(err))
}
const listscategories=()=>{
fetchSCategories()
.then(res=>setScategories(res.data))
.catch(err=>console.log(err))
}
const addproduct=(newproduit)=>{
setProducts([newproduit,...products])
}
const deleteProduct = (productId) => {
deleteArticle(productId)
.then(res=>
setProducts(products.filter((product) => product._id !== productId)))
//.then(console.log("suppression effectuée avec success"))
.catch(error=>console.log(error))
//}
};
const updateProduct = (prmod) => {
setProducts(
products.map((product) =>
product._id === prmod._id ? prmod : product
)
);
setEditingProduct(null);
};
return (
<div>
<ArticleList articles={products}/>
</div>
)
}
export default ArticlesApp