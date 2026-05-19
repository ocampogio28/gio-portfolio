"use client";

import { useState, useEffect } from "react";

interface WeatherData {
  temp: number;
}

export default function Widget() {
  const [time, setTime] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          });
        }
      } catch (err) {
        console.error("Failed to fetch weather packet:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 15 * 60 * 1000);

    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  return (
    <div className="absolute top-6 right-6 w-56">
      <div className="border border-black bg-white p-3 space-y-3">
        <div className="text-center">
          <div className="text-base opacity-40 uppercase tracking-wider mb-0.5">
            SYSTEM_TIME
          </div>
          <div className="text-3xl font-rainy tracking-tight">{time}</div>
        </div>

        <div className="border-t border-dashed border-black opacity-30" />
        <div className="text-center">
          <div className="text-base opacity-40 uppercase tracking-wider mb-0.5">
            CALENDAR
          </div>
          <div className="text-lg tracking-wide">{dateStr}</div>
        </div>

        <div className="border-t border-dashed border-black opacity-30" />

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
                <div className="leading-none font-base">{weather?.temp}°C</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
