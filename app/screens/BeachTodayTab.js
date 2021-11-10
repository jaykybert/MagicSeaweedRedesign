// React
import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Components
import InfoCard from "../shared/InfoCard";
import TideChart from "../components/TideChart";
import WindChart from "../components/WindChart";
// Utilites
import commonStyles from "../static/styles";
import { GetDummyApiData } from "../scripts/mswData";
import GetWeatherData from "../scripts/weatherData";
import GetDummyWeatherData from "../scripts/dummyWeatherData";

let mswData = GetDummyApiData();
let weatherData = GetDummyWeatherData();

/**
 * @function BeachTodayTab
 * Screen for displaying information about the beach today.
 * Contains temperature, wind, and surf information.
 *
 * @param {beachName}
 * @returns BeachTodayTab Component
 */
const BeachTodayTab = ({ beachName }) => {
  return (
    <ScrollView>
      <View>
        <Text style={Styles.cardLargeText}>
          {beachName}, {mswData[0]["day"]}
        </Text>

        <View style={Styles.adjacentCards}>
          <InfoCard>
            <Text style={commonStyles.cardHeading}>Weather</Text>

            <Image
              source={require(`../assets/weatherIcons/04n.png`)}
              style={{ width: 100, height: 100 }}
            />

            <Text style={commonStyles.subHeading}>
              {weatherData["weather"][0]["description"]}
            </Text>

            <View style={Styles.formatUnits}>
              <Text style={Styles.cardLargeText}>
                {Math.round(weatherData["main"]["temp"])}
              </Text>
              <Text style={Styles}>°C</Text>
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

              <View style={Styles.formatUnits}>
                <Text style={Styles.cardLargeText}>
                  {mswData[0]["wind"]["speed"]}
                </Text>

                <Text style={Styles}>{mswData[0]["wind"]["unit"]}</Text>
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
              <View style={Styles.formatUnits}>
                <Text style={Styles.cardLargeText}>
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

        <View>
          <InfoCard>
            <TideChart />
          </InfoCard>
        </View>

        <View>
          <InfoCard>
            <WindChart />
          </InfoCard>
        </View>

        <View>
          <InfoCard>
            <View style={Styles.advertisement}></View>
            <Text style={{ alignItems: "center", justifyContent: "center" }}>
              Ad Space
            </Text>
          </InfoCard>
        </View>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  advertisement: {
    height: 200,
  },
  cardLargeText: {
    fontWeight: "bold",
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
