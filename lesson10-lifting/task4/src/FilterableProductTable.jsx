import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    });
  };

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly,
    });
  };

  render() {
    const { handleFilterTextChange, handleInStockChange } = this;
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={handleFilterTextChange}
          onInStockChange={handleInStockChange}
        />
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </div>
    );
  }
}

export default FilterableProductTable;
