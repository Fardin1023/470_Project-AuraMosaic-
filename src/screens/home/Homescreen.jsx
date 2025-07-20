import styled from "styled-components"
import Hero from "./Hero";
import Featured from "./Featured";
import NewArrival from "./NewArrival";
import Catalog from "./Catalog";
import { handcraftCatalog, plantsCatalog, skincareCatalog } from "../../data/data";


const HomeScreenWrapper=styled.main`
`;
const Homescreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero/>
      <Featured />
      <NewArrival/>
      <Catalog catalogTitle={"Catalog For Skincare Products"} products={skincareCatalog}/>
      <Catalog catalogTitle={"Catalog For Handcraft Products"} products={handcraftCatalog}/>
      <Catalog catalogTitle={"Catalog For Plants Products"} products={plantsCatalog}/>
      </HomeScreenWrapper>
  )
}

export default Homescreen;