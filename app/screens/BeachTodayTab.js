// React
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Components
import InfoCard from "../shared/InfoCard";
import TideChart from "../components/TideChart";
// Utilites
import { GetData } from "../static/api";
import GetWeatherData from "../scripts/weatherData";

let data = GetData();

/**
 * @function BeachTodayTab
 * Screen for displaying information about the beach today.
 * Contains temperature, wind, and surf information.
 *
 * @param {beachData} - The beach name.
 * @returns BeachTodayTab Component
 */
const BeachTodayTab = ({ beachData }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    async function testWeatherData() {
      try {
        let data = GetWeatherData(50.714003, -1.8767287);
        setWeatherData(data);
      } catch (error) {
        console.warn(e);
      }
    }
    testWeatherData();
  }, []);

  return (
    <View>
      <Text style={BeachTodayTabStyles.bigText}>{beachData}</Text>

      <View style={BeachTodayTabStyles.adjacentCards}>
        <InfoCard>
          <Text style={BeachTodayTabStyles.heading}>Weather</Text>
        </InfoCard>

        <InfoCard>
          <Text style={BeachTodayTabStyles.heading}>Wind</Text>
          <View>
            <MaterialCommunityIcons
              name="arrow-down-bold"
              size={80}
              color="#0527cb"
              style={{
                transform: [{ rotate: `${data[0]["wind"]["direction"]}deg` }],
              }}
            />

            <Text style={BeachTodayTabStyles.smallText}>
              {data[0]["wind"]["compassDirection"]}
            </Text>

            <Text style={BeachTodayTabStyles.bigText}>
              {data[0]["wind"]["speed"]}
            </Text>

            <Text style={BeachTodayTabStyles.smallText}>
              {data[0]["wind"]["unit"]}
            </Text>
          </View>
        </InfoCard>

        <InfoCard>
          <Text style={BeachTodayTabStyles.heading}>Swell</Text>
          <View>
            <MaterialCommunityIcons
              name="arrow-down-bold"
              size={80}
              color="#0527cb"
              style={{
                transform: [
                  {
                    rotate: `${Math.round(
                      data[0]["swell"]["components"]["primary"]["direction"]
                    )}deg`,
                  },
                ],
              }}
            />
            <Text style={BeachTodayTabStyles.smallText}>
              {data[0]["swell"]["components"]["primary"]["compassDirection"]}
            </Text>

            <Text style={BeachTodayTabStyles.mediumText}>
              {data[0]["swell"]["components"]["primary"]["height"]}
              {data[0]["swell"]["unit"]}
            </Text>

            <Text style={BeachTodayTabStyles.smallText}>
              @{data[0]["swell"]["components"]["primary"]["period"]}s
            </Text>
          </View>
        </InfoCard>
      </View>

      <View>
        <InfoCard>
          <TideChart />
        </InfoCard>
      </View>
    </View>
  );
};

const BeachTodayTabStyles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
  },
  smallText: {
    marginTop: -5, // Bring text closer to arrow.
    textAlign: "center",
    fontSize: 12,
    fontStyle: "italic",
  },
  bigText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 32,
  },
  adjacentCards: {
    flexDirection: "row",
    justifyContent: "center",
  },
  mediumText: {
    textAlign: "center",
    fontSize: 18,
  },
  otherMediumText: {},
});

export default BeachTodayTab;
