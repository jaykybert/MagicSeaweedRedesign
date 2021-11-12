/**
 * @file BeachTodayTab.js
 * Contains the BeachTodayTab component, relevant styles, and function calls
 * for getting the MSW API and openweathermap API data.
 */

// React
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Components
import ConditionsOverview from "../components/ConditionsOverview";
import InfoCard from "../shared/InfoCard";
import TideChart from "../components/TideChart";
import WindChart from "../components/WindChart";
// Utilites
import commonStyles from "../static/commonStyles";
import GetDummyWeatherData from "../static/dummyWeatherData";
import { GetMSWApiData } from "../static/mswData";

let mswData = GetMSWApiData();
let weatherData = GetDummyWeatherData();

/**
 * @function BeachTodayTab
 * Displays information about the beach today using the MSW data.
 *    > Contains a temperature, wind, and swell overview.
 *    > Contains a tide chart and wind chart for the day.
 *    > Contains advertisement space at the bottom.
 *
 * @param {beachName}
 */
const BeachTodayTab = ({ beachName }) => {
  return (
    <ScrollView style={{ backgroundColor: "#d4f2ff" }}>
      <View>
        <Text style={styles.cardLargeText}>
          {beachName}, {mswData[0]["day"]}
        </Text>

        <InfoCard>
          <ConditionsOverview />
        </InfoCard>

        <View style={styles.adjacentCards}>
          <InfoCard>
            <Text style={commonStyles.cardHeading}>Weather</Text>

            <Image
              source={require(`../assets/openWeatherIcons/04n.png`)}
              style={{ width: 100, height: 100 }}
            />

            <Text style={commonStyles.subHeading}>
              {weatherData["weather"][0]["description"]}
            </Text>

            <View style={styles.formatUnits}>
              <Text style={styles.cardLargeText}>
                {Math.round(weatherData["main"]["temp"])}
              </Text>
              <Text style={styles}>°C</Text>
            </View>

            <Text style={commonStyles.subHeading}>
              L: {Math.floor(weatherData["main"]["temp_min"])} H:{" "}
              {Math.ceil(weatherData["main"]["temp_max"])}
            </Text>
          </InfoCard>

          <InfoCard>
            <Text style={commonStyles.cardHeading}>Wind</Text>
            <View>
              <MaterialCommunityIcons
                name="arrow-down-bold"
                size={100}
                color="#0527cb"
                style={{
                  transform: [
                    { rotate: `${mswData[0]["wind"]["direction"]}deg` },
                  ],
                }}
              />

              <Text style={commonStyles.subHeading}>
                {mswData[0]["wind"]["compassDirection"]} |{" "}
                {mswData[0]["wind"]["direction"]}°
              </Text>

              <View style={styles.formatUnits}>
                <Text style={styles.cardLargeText}>
                  {mswData[0]["wind"]["speed"]}
                </Text>

                <Text style={styles}>{mswData[0]["wind"]["unit"]}</Text>
              </View>
            </View>
          </InfoCard>

          <InfoCard>
            <Text style={commonStyles.cardHeading}>Swell</Text>
            <View>
              <MaterialCommunityIcons
                name="arrow-down-bold"
                size={100}
                color="#0527cb"
                style={{
                  transform: [
                    {
                      rotate: `${Math.round(
                        mswData[0]["swell"]["components"]["primary"][
                          "direction"
                        ]
                      )}deg`,
                    },
                  ],
                }}
              />
              <Text style={commonStyles.subHeading}>
                {
                  mswData[0]["swell"]["components"]["primary"][
                    "compassDirection"
                  ]
                }{" "}
                |{" "}
                {Math.round(
                  mswData[0]["swell"]["components"]["primary"]["direction"]
                )}
                °
              </Text>
              <View style={styles.formatUnits}>
                <Text style={styles.cardLargeText}>
                  {mswData[0]["swell"]["components"]["primary"]["height"]}
                </Text>
                <Text> {mswData[0]["swell"]["unit"]}</Text>
              </View>

              <Text style={commonStyles.subHeading}>
                @{mswData[0]["swell"]["components"]["primary"]["period"]}s
              </Text>
            </View>
          </InfoCard>
        </View>

        <InfoCard>
          <TideChart />
        </InfoCard>

        <InfoCard>
          <WindChart />
        </InfoCard>

        <InfoCard>
          <View style={styles.advertisement}>
            <Text style={{ textAlign: "center" }}>Ad Space</Text>
          </View>
        </InfoCard>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  advertisement: {
    height: 150,
  },
  cardLargeText: {
    textAlign: "center",
    fontSize: 30,
  },
  adjacentCards: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  formatUnits: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BeachTodayTab;
