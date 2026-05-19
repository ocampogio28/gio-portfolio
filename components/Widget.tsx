"use client";

import { useState, useEffect } from "react";

interface WeatherData {
  temp: number;
  code: number;
}

export default function Widget() {
  const [time, setTime] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Helper function to turn WMO weather codes into pixel-ready retro categories
  const getWeatherStatus = (code: number) => {
    if (code === 0) return { text: "SUNNY" };
    if (code >= 1 && code <= 3) return { text: "CLOUDY" };
    if (code >= 45 && code <= 48) return { text: "FOGGY" };
    if (code >= 51 && code <= 67) return { text: "RAIN" };
    if (code >= 71 && code <= 82) return { text: "SNOW" };
    if (code >= 95) return { text: "STORM_ERR" };
    return { text: "ENV_LOAD" };
  };

  useEffect(() => {
    // 1. Live Clock & Calendar Loop
    const updateDateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );

      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
      };
      setDateStr(now.toLocaleDateString([], options).toUpperCase());
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    // 2. Fetch Live Weather Data (Valenzuela Coordinates)
    const fetchWeather = async () => {
      try {
        const lat = 14.6937;
        const lon = 120.983;
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
        );
        const data = await res.json();

        if (data?.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            code: data.current_weather.weathercode,
          });
        }
      } catch (err) {
        console.error("Failed to fetch weather packet:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather details every 15 minutes to save client cycles
    const weatherTimer = setInterval(fetchWeather, 15 * 60 * 1000);

    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  const currentStatus = weather
    ? getWeatherStatus(weather.code)
    : { icon: "📡", text: "NO_SIGNAL" };

  return (
    <div className="absolute top-6 right-6 w-56flex">
      <div className="border border-black bg-white p-3 space-y-3">
        {/* TIME SECTION */}
        <div className="text-center">
          <div className="text-base opacity-40 uppercase tracking-wider mb-0.5">
            SYSTEM_TIME
          </div>
          <div className="text-3xl font-rainy tracking-tight">{time}</div>
        </div>

        <div className="border-t border-dashed border-black opacity-30" />

        {/* DATE SECTION */}
        <div className="text-center">
          <div className="text-base opacity-40 uppercase tracking-wider mb-0.5">
            CALENDAR
          </div>
          <div className="text-lg tracking-wide">{dateStr}</div>
        </div>

        <div className="border-t border-dashed border-black opacity-30" />

        {/* LIVE WEATHER SECTION */}
        <div className="text-center">
          <div className="text-base opacity-40 uppercase tracking-wider mb-1">
            ENV_STATUS
          </div>
          {loading ? (
            <div className="text-xs animate-pulse opacity-60 uppercase">
              FETCHING_PACKETS...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <div className="text-left">
                <div className=" leading-none font-base">{weather?.temp}°C</div>
                <div className=" opacity-60 uppercase tracking-tight">
                  {currentStatus.text}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
