import { VictoryPie, Slice, VictoryLabel, VictoryAnimation } from "victory";
import { useState, useEffect } from "react";
import "./fonts/fonts.css";


function Sparziel() {
    /*const response = await fetch('https://api.npms.io/v2/search?q=react');
    const data = await response.json();
    this.setState({ totalReactPackages: data.total })*/

    /*fetch('http://85.215.77.230//getBalance')
        .then(response => response.json())
        .then(data => this.setSavings( data.total ));*/

    const [savings, setSavings] = useState(8723.36);
    const [savingsGoal, setSavingsGoal] = useState(10000);
    const [state, setState] = useState({ value: 0, data: getData(savings) });

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://85.215.77.230//getBalance');
        const data = await response.json();
        setSavings(data.total);
        const newData = getData(data.total);
        setState({ value: 0, data: newData });
      };

      fetchData();

      let value = 0;
      const setStateInterval = setInterval(() => {
          value += savings;
          value = value >= savings ? setState({ value, data: getData(value)}) : value;
      }, 200);

      return () => {
          clearInterval(setStateInterval);
      };
    }, []);

    function getData(value) {
        return [
            { x: 1, y: value },
            { x: 2, y: savingsGoal - value },
        ];
    }

    const GradientSlice = props => {
      return (
        <g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#AF69B3" />
              <stop offset="50%" stopColor="#7B69C7" />
              <stop offset="100%" stopColor="#4668DB" />
            </linearGradient>
          </defs>
          <Slice {...props} style={{ fill: props.datum.x === 1 ? 'url(#gradient)' : 'transparent' }} />
        </g>
      );
    };

    function calcFont(value) {
      if (value < 100000) {
        return 45;
      } 
      if(value <1000000){
        return 39;
      }
      else {
        return 33;
      }
    }
  
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            dataComponent={<GradientSlice />}
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
          />
          <VictoryAnimation duration={2000} data={state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={200}
                  text={`${newProps.value.toFixed(2)} €`}
                  style={{ fontSize: calcFont(newProps.value), fontFamily: "Avenir Next LT Pro", fill: '#E1E1E1'}}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }

  export default Sparziel;