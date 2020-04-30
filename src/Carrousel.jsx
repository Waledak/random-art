import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import metAPI from "./lib/metAPI";
import "./Carrousel.css";
import { Spinner } from "reactstrap";

export default class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentId: "9",
      objects: [],
      ImageSmall: "",
      isLoading: true,
    };
    this.loadObjectId = this.loadObjectId.bind(this);
  }

  componentDidMount() {
    this.loadObjectId();
  }

  loadObjectId() {
    const linksArr = metAPI.getIds(this.state.departmentId, 30);
    let promiseArr = linksArr.map((l) => fetch(l).then((res) => res.json()));
    Promise.all(promiseArr).then((res) => {
      this.setState({
        objects: res,
        isLoading: false,
      });
    });
  }
  // axios({
  //   url: `https://collectionapi.metmuseum.org/public/collection/v1/objects`,
  //   method: 'GET',
  //   headers: {
  //       'Accept': 'application/json',
  //   },
  // })
  //   .then(response => response.data)
  //   .then(datas => {
  //     console.log(tydatas.objectIDs[5])
  //     for(let i=0;datas.objectIDs.lenght>i;i++) {
  //       console.log(datas.objectIDs[i])
  //       for(let y=0; datas.objectIDs[i].lenght>y;y++){
  //         console.log(datas.objectIDs[i][y])
  //         for(let z=0; datas.objectIDs[i][y].lenght>z;z++){
  //           console.log(datas.objectIDs[i][y][z])
  //           window.localStorage.setItem(datas.objectIDs[i][y][z], JSON.parse(datas.objectIDs[i][y][z]))
  //         }
  //       }
  //     }
  //   })
  //   .catch(err => {
  //       console.error(err);
  //   });

  render() {
    return (
      <div className="carrousel">
        {this.state.isLoading ? (
          <div>
            <Spinner style={{ width: '3rem', height: '3rem' }} />

          </div>
        ) : (
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                },
              },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
            autoCycle={true}
            cycleInterval={2200}
          >
            {this.state.objects
              .filter((object) => {
                return object.primaryImageSmall !== '';
              })
              .map((object) => (
                <div 
                key={object.objectID} 
                className="container-image"
                onClick={(e)=>this.handleClick(e.target.key)}
                >
                  <img
                    className="carrousel-img"
                    alt={object.objectName}
                    src={object.primaryImageSmall}
                  />
                </div>
              ))}
          </InfiniteCarousel>
        )}
      </div>
    );
  }
}
