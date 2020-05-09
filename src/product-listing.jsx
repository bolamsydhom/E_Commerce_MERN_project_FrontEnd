import React, { Component } from 'react';
import _ from 'lodash';
import { GetAllProducts, Delete, GetFilteredProducts } from './services/products';
import { getAllCategories } from './services/category';
import ProductItem from './product-item';
import { Link } from 'react-router-dom';

import Pagination from './pagination';
class ProductListing extends Component {
  state = {
    products: [],
    categories: [],
    productsOriginal: [],
    currentPage: 1,
    pageSize: 9,
    searchedProduct: '',
    numberOfProducts: 0,
    filtered: false,
    catName:''
  };
  async componentDidMount() {
    // const data = await GetAllProducts();
    const data = await GetAllProducts(this.state.currentPage, this.state.pageSize);
    console.log(data);
    const categories = await getAllCategories();
    this.setState({ products: data.product });
    this.setState({ numberOfProducts: data.numberOfProducts });
    // this.setState({ numberOfPages: data.numberOfPages });
    // this.setState({ productsOriginal: data });
    debugger;
    this.setState({ categories });
  }

  deleteHandler = async (item) => {
    await Delete(item._id);
    //clone
    let products = [...this.state.products];
    //edit
    products = await GetAllProducts(this.state.currentPage, this.state.pageSize);
    
    // products = products.filter((i) => i.id !== item.id);
    //set state
    this.setState({ products });
    this.setState({ numberOfProducts: products.numberOfProducts });

  };
  pageChangeHandler = async (item) => {
    this.setState({ currentPage: item });
    const data = await GetAllProducts(item, this.state.pageSize);
    this.setState({ products: data.product });
  };

  filterHandle = async (catName) => {
    const data = await GetFilteredProducts(this.state.currentPage, this.state.pageSize, catName);
    this.setState({ products: data });
    this.setState({ numberOfProducts: data.length });
    this.setState({filtered: true})
    this.setState({ catName: catName });
    // const categories = await getAllCategories();
    // this.setState({ categories });
  };



  sortHandle = async (event) =>{
    const sortQuery = event.target.value;
    const sortBy = sortQuery.split(":");
    // console.log(sortBy[0] +"    "+ sortBy[1]);
    if(this.state.filtered){
     const data = await GetFilteredProducts(this.state.currentPage, this.state.pageSize,this.state.catName, sortBy[0]);
     this.setState({ products: data });

    }else{
     const data = await GetAllProducts(this.state.currentPage, this.state.pageSize, sortBy[0], sortBy[1]);
     this.setState({ products: data.product });

    }
    // console.log(data)
    debugger;

  }

  handleSearch = async (e) => {
    const searchedProduct = e.target.value;
    this.setState({ searchedProduct });
    console.log(searchedProduct);
    //arr clone

    const allProducts = await GetAllProducts();
    const productsOriginal = allProducts.product;
    let result = [];
    debugger;

    if (searchedProduct !== null || searchedProduct !== '') {
      result = productsOriginal.filter((i) => i.data[0].name.toLowerCase().includes(searchedProduct.toLowerCase()));
      //this.setState({ products: result })
      console.log(productsOriginal);
    }
    if (searchedProduct === '') {
      result = productsOriginal;
      console.log(result);

      //this.setState({ products })
    }
    this.setState({ products: result, numberOfProducts: result.length });
    //this.setState({ products: productsOriginal })
  };

  render() {
    let { products, currentPage, pageSize, searchedProduct, numberOfProducts } = this.state;
    const { addToCartHandler } = this.props;
    //console.log(products)
    //Paginnation
    // const startIndex = (currentPage - 1) * pageSize;
    // const pageContent = _(products).slice(startIndex).take(pageSize).value();

    return (
      <React.Fragment>
        <div className='container'>
          {/* <!-- filters --> */}
          <section className='filters'>
            {/* <!-- search box --> */}
            <div className='search-box'>
              <input
                className='search-box__input'
                onChange={this.handleSearch}
                value={searchedProduct}
                placeholder='Search...'
                type='text'
                name='txt_search'
                id=''
              />
              <button type='submit' className='search-box__btn'>
                <i className='fas fa-search'></i>
              </button>
            </div>
            {/* <!-- filter list --> */}
            <div>
              {/* <!-- filter header --> */}
              <h5>Categories</h5>
              {/* <!-- filter list --> */}
              <ul className='list list--vr-separator'>
                {this.state.categories.map((category) => (
                  <li key={category.id} className='link list__item' onClick={() => this.filterHandle(category.id)}>
                    <i className='link__icon fas fa-angle-right'></i>
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* <!-- Items --> */}
          <section className='item-listing'>
            {/* <!-- tools (sorting , change view , exporting) --> */}
            <div className='item-listing__tools'>
              <select className='form-control' name='' id='' onChange={this.sortHandle}>
                <option value=''></option>
                <option value='price:1'>Price low to high</option>
                <option value='price:-1'>Price high to low</option>
                <option value='data.name:1'>Name</option>
              </select>
              <Link className='action-btn' href='#'>
                <i className='fas fa-plus'></i>
              </Link>
            </div>
            {/* <!-- items --> */}
            <div className='item-listing__items item-listing--3items'>
              {/* <!-- medium item --> */}
              {products
                ? products.map((item) => (
                    <ProductItem
                      deleteHandler={this.deleteHandler}
                      addToCartHandler={addToCartHandler}
                      item={item}
                      key={item.id}
                      id={item.id}
                      userID={item.userID}
                      data={item.data}
                      price={item.price}
                      discount={item.discount}
                      imagesUrls={item.imagesUrls}
                      authorized={
                        item.userID.toString() === localStorage.getItem('loggedPerson').toString() ? true : false
                      }
                    />
                  ))
                : []}
            </div>
            {/* <!-- paging --> */}
            <Pagination
              // numberOfPages={this.state.numberOfPages}
              count={numberOfProducts}
              pageSize={pageSize}
              currentPage={currentPage}
              handlePageChange={this.pageChangeHandler}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductListing;
