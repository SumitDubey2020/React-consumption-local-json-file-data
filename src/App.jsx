import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data/data.json'
import PageLayout from './Components/PageLayout'
import Pagination from 'react-bootstrap/Pagination'; 

import Paginate from './Components/Paginate';

function App() {
  const [HotelList, setHotelList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
 
    
  

  // ...

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = HotelList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
 };
 const previousPage = () => {
  if (currentPage !== 1) {
     setCurrentPage(currentPage - 1);
  }
};

const nextPage = () => {
  if (currentPage !== Math.ceil(HotelList.length / postsPerPage)) {
     setCurrentPage(currentPage + 1);
  }
};

  return (
    <>
    <PageLayout>
      
    </PageLayout>
    <Paginate
                  postsPerPage={postsPerPage}
                  totalPosts={HotelList.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
               />


   </>
    
  )
}

export default App
