//@ts-nocheck

// getPokemonImages.ts

function formatImages(imageModules: Record<string, any>) {
    const images: Record<string, string> = {};
    for (const path in imageModules) {
      const key = path.split("/").pop()?.replace(/\.(png|jpe?g|svg)$/, "");
      if (key) {
        images[key] = imageModules[path].default;
      }
    }
    return images;
  }
  
  const shinyModules = import.meta.glob("../assets/pokemons/shiny/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });
  const defaultModules = import.meta.glob("../assets/pokemons/default/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });
  
  export const images = formatImages(shinyModules);
  export const defaultImages = formatImages(defaultModules);
  