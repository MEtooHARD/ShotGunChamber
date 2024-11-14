"use client"

import { RouletteHelper } from "@/components/RouletteHelper";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

export default function Home() {
  const [, , themeIni] = useTheme();


  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => { if (themeIni) setThemeLoaded(true); }, [themeIni]);

  return <>
    {themeLoaded ? <RouletteHelper></RouletteHelper> : <></>}
  </>;
}
