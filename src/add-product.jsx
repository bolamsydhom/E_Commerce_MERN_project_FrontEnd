import React, { Component } from 'react';
import { AddaProduct, GetById, PatchaProduct } from './services/products';
import { Link } from 'react-router-dom';
import { getAllCategories } from './services/category';
import { UploadImage } from './services/products';

class AddProduct extends Component {
  state = {
    product: {
      data: [{}],
      price: '',
      discount: '',
      categoryId: '',
      imagesUrls: [],
    },
    image: null,
    editFlag: false,
    categories: [],
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const editFlag = true;
      const product = await GetById(id);
      this.setState({ product, editFlag });
    }
    const categories = await getAllCategories();
    this.setState({ categories });

    console.log(this.state.categories);
    // this.setState({ productsOriginal: data })
  }

  addProductHandler = async (e) => {
    e.preventDefault();
    const price = +this.state.product.price;
    const discount = +this.state.product.discount;
    const { data, name, description, category, imagesUrls } = this.state.product;
    const obj = {
      data: name ? { name, description } : { name: data[0].name, description: data[0].description },
      price,
      discount,
      categoryId: category,
      imagesUrls,
    };
    console.log(obj);
    debugger;
    if (this.state.editFlag) {
      console.log(obj);

      const { data, error } = await PatchaProduct(this.props.match.params.id, obj);
      console.log(data, error);

      if (data) {
        alert('edited');
        this.props.history.push('/product-listing');
        const editFlag = false;
        this.setState({ editFlag });
      } else if (error) {
        alert(error);
      }
    } else {
      const { data, error } = await AddaProduct(obj);
      console.log(data, error);

      if (data) {
        alert('added');
        this.props.history.push('/product-listing');
      } else if (error) {
        alert(error);
      }
    }
  };

  changeInputHandler = (e) => {
    const product = { ...this.state.product };
    if (e.target.name == 'name') {
      product.data[0].name = e.target.value;
    } else if (e.target.name == 'description') {
      product.data[0].description = e.target.value;
    } else {
      product[e.target.name] = e.target.value;
    }
    this.setState({ product });
  };

  AddTagHandler = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      e.preventDefault();

      console.log('tag added');
    }
  };

  fileSelectHandler = async (e) => {
    const image = e.target.files[0];
    const imageUrl = await UploadImage(image);
    // this.setState({image: })

    let { imagesUrls } = { ...this.state.product };
    imagesUrls.push(imageUrl);
    this.setState({ imagesUrls });
    console.log(imagesUrls);
    console.log(this.state.product);
  };

  render() {
    // {
    //     console.log(this.state.product.category);
    // }
    const { name, description, data, price, discount, category, tags, categoryId, imagesUrls } = this.state.product;
    // const data = this.state.product.data.map((e) => {
    //   return [{name: e.name, description: e.description}];
    // });

    const { categories, image } = this.state;
    return (
      <React.Fragment>
        <div className=' container'>
          <form className='add-product' action=''>
            <div className='add-product__images slider'>
              <div className='add-product__image-actions'>
                <div className='add-product__image-action'>
                  <input
                    type='file'
                    name='imagesUrls'
                    value={image}
                    id=''
                    className='upload'
                    onChange={this.fileSelectHandler}
                  />
                  <Link type='file'>
                    <i className='fas fa-plus-square'></i>
                  </Link>
                  <Link href='#'>
                    <i className='fas fa-edit'></i>
                  </Link>
                  <Link href='#'>
                    <i className='fas fa-trash-alt'></i>
                  </Link>
                </div>
              </div>
              <div className='slider__items'>
                <div
                  className='slider__item active'
                  style={{
                    backgroundImage:
                      this.state.product.imagesUrls.length == 0
                        ? 'url(img/products/product-grey-7.jpg)'
                        : 'url(' + imagesUrls[0] + ')',
                  }}
                ></div>
              </div>
            </div>
            <div className='add-product__data'>
              <div className='form-controls'>
                <section className='tabs'>
                  <div className='tabs__headers'>
                    <div className='tabs__header active'>English</div>
                    <div className='tabs__header'>Arabic</div>
                  </div>
                  <div className='tabs__bodies'>
                    <div className='tabs__body active'>
                      {/* {invalid} */}
                      <div className='form-group '>
                        <label htmlFor=''>Name</label>
                        <input
                          onChange={this.changeInputHandler}
                          value={data[0].name}
                          className='form-control'
                          type='text'
                          name='name'
                          id=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor=''>Description</label>
                        <textarea
                          onChange={this.changeInputHandler}
                          value={data[0].description}
                          className='form-control'
                          name='description'
                          id='description'
                          cols='30'
                          rows='4'
                        ></textarea>
                      </div>
                    </div>
                    <div className='tabs__body '>
                      <div className='form-group invalid'>
                        <label htmlFor=''>Name</label>
                        <input className='form-control' type='text' name='' id='' />
                      </div>
                      <div className='form-group'>
                        <label htmlFor=''>Description</label>
                        <textarea className='form-control' name='' id='' cols='30' rows='4'></textarea>
                      </div>
                    </div>
                  </div>
                </section>

                <div className='form-group'>
                  <label htmlFor=''>Price</label>
                  <input
                    onChange={this.changeInputHandler}
                    value={price}
                    className='form-control'
                    type='number'
                    name='price'
                    id=''
                  />
                </div>
                <div className='add-product__discount'>
                  {/* <div className="form-group">
                                        <label htmlFor="">Satus</label>
                                        <div className="form-group__radios">
                                            <div className="form-group__radio"><input type="radio" name="" id="" /><span>On Sale</span></div>
                                            <div className="form-group__radio"><input type="radio" name="" id="" /><span>Not On Sale</span></div>
                                        </div>
                                    </div> */}
                  <div className='form-group'>
                    <label htmlFor=''>Discount</label>
                    <input
                      onChange={this.changeInputHandler}
                      value={discount}
                      className='form-control'
                      type='number'
                      name='discount'
                      id=''
                    />
                  </div>
                </div>
                {/* <div className="form-group">
                                    <label htmlFor="">Payment Types</label>
                                    <div className="form-group__checkboxs">
                                        <div className="form-group__checkbox"><input type="checkbox" name="" id="" /><span>Direct Bank
                                    Transfare</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="" id="" /><span>Cheque Payment</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="" id="" /><span>Paypal</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="" id="" /><span>Visa</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="" id="" /><span>Mastercard</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="" id="" /><span>On Dilivery</span></div>
                                    </div>
                                </div> */}
                <div className='form-group'>
                  <label htmlFor=''>Category</label>
                  <select onChange={this.changeInputHandler} className='form-control' name='category' id=''>
                    <option></option>
                    {categories.map((category) => (
                      <option key={category.id} selected={category.id === categoryId} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='add-product__actions'>
                  <button className='btn btn--gray'>Cancel</button>
                  <button onClick={this.addProductHandler} className='btn btn--primary'>
                    {this.props.match.params.id ? 'Edit' : 'Add'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddProduct;
