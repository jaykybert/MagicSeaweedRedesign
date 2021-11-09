// React
import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Components
import InfoCard from "../shared/InfoCard";
import TideChart from "../components/TideChart";
// Utilites
import { GetData } from "../scripts/api";
import GetWeatherData from "../scripts/weatherData";
import GetDummyWeatherData from "../scripts/dummyWeatherData";

let data = GetData();
let wDummyData = GetDummyWeatherData();

let img = `${wDummyData["weather"][0]["icon"]}.png`;

/**
 * @function BeachTodayTab
 * Screen for displaying information about the beach today.
 * Contains temperature, wind, and surf information.
 *
 * @param {beachName} - The beach name.
 * @returns BeachTodayTab Component
 */
const BeachTodayTab = ({ beachName }) => {
  const [weatherData, setWeatherData] = useState();

  console.log(img);

  /*
  useEffect(() => {
    async function returnWeatherData() {
      try {
        let wData = GetWeatherData(beachName);
        setWeatherData(wData);
        console.log(weatherData);
      } catch (error) {
        console.warn(error);
      }
    }
    returnWeatherData();
  }, []);
  */

  return (
    <ScrollView>
      <View>
        <Text style={BeachTodayTabStyles.bigText}>{beachName}</Text>

        <View style={BeachTodayTabStyles.adjacentCards}>
          <InfoCard>
            <Text style={BeachTodayTabStyles.heading}>Weather</Text>

            <Image
              source={require(`../assets/weatherIcons/04n.png`)}
              style={{ width: 100, height: 100 }}
            />

            <Text style={BeachTodayTabStyles.smallText}>
              L: {Math.floor(wDummyData["main"]["temp_min"])} H:{" "}
              {Math.ceil(wDummyData["main"]["temp_max"])}
            </Text>

            <View style={BeachTodayTabStyles.sameRow}>
              <Text style={BeachTodayTabStyles.bigText}>
                {Math.round(wDummyData["main"]["temp"])}
              </Text>
              <Text>°C</Text>
            </View>
          </InfoCard>

          <InfoCard>
            <Text style={BeachTodayTabStyles.heading}>Wind</Text>
            <View>
              <MaterialCommunityIcons
                name="arrow-down-bold"
                size={100}
                color="#0527cb"
                style={{
                  transform: [{ rotate: `${data[0]["wind"]["direction"]}deg` }],
                }}
              />

              <Text style={BeachTodayTabStyles.smallText}>
                {data[0]["wind"]["compassDirection"]} |{" "}
                {data[0]["wind"]["direction"]}°
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
                size={100}
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
                {data[0]["swell"]["components"]["primary"]["compassDirection"]}{" "}
                |{" "}
                {Math.round(
                  data[0]["swell"]["components"]["primary"]["direction"]
                )}
                °
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
    </ScrollView>
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
    fontSize: 26,
  },
  sameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BeachTodayTab;
