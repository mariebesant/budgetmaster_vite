import { VictoryPie, Slice, VictoryLabel, VictoryAnimation } from "victory";
import { useState, useEffect } from "react";
import "./fonts/fonts.css";

/**
 * Komponente für das Sparziel.
 */
function Sparziel() {
  const [savings, setSavings] = useState(null); // Aktuelles Guthaben
  const [savingsGoal, setSavingsGoal] = useState(null); // Sparziel
  const [state, setState] = useState({ value: 0, data: [] }); // Zustand für die Animation
  const [loading, setLoading] = useState(true); // Ladezustand

  /**
   * Lädt das Sparziel und das Saldo vom Server.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/getSavingsGoal', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
          setSavingsGoal(jsonResponse.savings_goal);
          fetchDataSavings();
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDataSavings = async () => {
      try {
        const response = await fetch('api/getBalance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
          setSavings(jsonResponse.balance);
          setState({ value: 0, data: getData(jsonResponse.balance) });
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /**
   * Aktualisiert den Zustand der Animation, um den Kreis zu füllen.
   */
  useEffect(() => {
    let value = 0;
    const setStateInterval = setInterval(() => {
      value += savings;
      value = value >= savings ? setState({ value, data: getData(value) }) : value;
    }, 200);
    console.log(savings);

    return () => {
      clearInterval(setStateInterval);
    };
  }, [savings]);

  /**
   * Gibt die Daten für das Diagramm zurück.
   * @param {number} value - Aktuelles Salso
   * @returns {Array} - Daten für das Diagramm
   */
  function getData(value) {
    console.log("prüfe: " + value);
    return [
      { x: 1, y: value },
      { x: 2, y: savingsGoal - value },
    ];
  }

  /**
   * Berechnet die Schriftgröße basierend auf dem Saldo.
   * @param {number} value - Aktuelles Saldo
   * @returns {number} - Schriftgröße
   */
  function calcFont(value) {
    if (value < 100000) {
      return 45;
    }
    if (value < 1000000) {
      return 39;
    } else {
      return 33;
    }
  }

  /**
   * Komponente für den Verlauf des Diagramms.
   * @param {object} props - Eigenschaften der Komponente
   * @returns {JSX.Element} - Verlauf des Diagramms
   */
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

  /**
   * Konvertiert den Betrag in Euro.
   * @param {number} num - Betrag
   * @returns {string} - Betrag in Euro
   */
  function convertEuro(num) {
    return (num / 100).toFixed(2);
  }

  if (loading) {
    return <div>Loading...</div>;
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
                text={`${convertEuro(newProps.value)} €`}
                style={{ fontSize: calcFont(newProps.value), fontFamily: "Avenir Next LT Pro", fill: '#E1E1E1' }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
    </div>
  );
}

export default Sparziel;