import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ProductListing from './ProductListing';
import Productdetail from './ProductDetails';
import CategoryList from './CategoryList';
import Default from './Default';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productlisting" element={<ProductListing />} />
        <Route path={`/productlisting/:category`} element={<CategoryList />} />
        <Route path={`/productdetail/:id`} element={<Productdetail />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}