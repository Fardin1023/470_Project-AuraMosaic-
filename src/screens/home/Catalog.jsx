import { Container, Section } from "../../styles/themes/styles"
import Title from "../../components/common/Title";
import PropTypes from "prop-types";
import ProductList from "../../components/product/ProductList";


const Catalog = ({catalogTitle,products}) => {
  return (
    <Section>
        <Container>
            <div className="category-content">
                <Title titleText={catalogTitle}/>
                <ProductList products={products}/>
            </div>
        </Container>
    </Section>
  )
}

export default Catalog;
Catalog.PropTypes={
    catalogTitle:PropTypes.string,
    products:PropTypes.array,
};