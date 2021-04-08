//? Top Recipe Section
const topRecipeArr = [
  {
    //? location: "Top Recipes #1",
    title: "Creamy Mushroom Cavatappi",
    about: "If you’re mad for mushrooms, this pasta will treat you right. They’re the flavor backbone of this recipe, bringing all those deep, earthy flavors that you know and love. We’ve added springy cavatappi spirals, a creamy garlic herb sauce, and a sprinkling of Parmesan cheese (mushrooms, pasta, and dairy are pretty much best friends, after all). Get ready for this umami bomb to make waves at your dinner table!",
    info: "Prep: 10min | Total: 45min | Calories: 750",
    ingredients: `<ul>
        <li>&#8226 Scallions (2-3)</li>
        <li>&#8226 Cavatappi Pasta (8 oz)</li>
        <li>&#8226 Button Mushrooms (8 oz)</li>
        <li>&#8226 Flour (1 TBSP)</li>
        <li>&#8226 Milk (6.75 oz)</li>
        <li>&#8226 Cream Cheese or Mascarpone (2 TBSP)</li>
        <li>&#8226 Garlic Herb Butter (2 TBSP)</li>
        <li>&#8226 Parmesan Cheese (1/4 cup)</li>
        <li>&#8226 Olive Oil (2 TSP)</li>
        <li>&#8226 Butter (2 TBSP)</li>
        <li>&#8226 Salt & Pepper</li>
      </ul>`,
    instructions: `<ul>
      <li> &#8226
        Bring Medium Pot of <strong>salted water</strong> to a boil. <strong>Wash/dry all produce</strong>. Trim and Slice <strong>mushrooms</strong> into 1/4-inch-thick pieces. Trim and thinly slice <strong>scallions</strong>, seperating whites from greens.
      </li>
      <br />
      <li> &#8226
        Heat a large drizzle of <strong>olive oil</strong> in a large pan over medium-high heat. Add <strong>mushrooms</strong>; season with <strong>salt</strong> and <strong>pepper</strong>. Cook, stiring occasionally, until browned and slightly crispy, 5-7 minutes. Turn off heat; transfer to a paper-towel-lined plate. Wash out pan.
      </li>
      <br />
      <li>&#8226
        Once water is boiling, add <strong>cavatappi</strong> to pot. Cook, stirring occasionally, until aldente, 9-11 minutes. Reserve <strong>1 cup pasta cooking water</strong>, then drain.
      </li>
      <br />
      <li>&#8226
        While pasta cooks, melt <strong>2 TBSP plain butter</strong> (4 TBSP for 4 servings) in pan used for mushrooms over medium-high heat. Add <strong>scallion whites</strong> and cook until just softened, 1 minute. Add <strong>flour</strong> and cook, stirring, until lightly browned, 1-2 minutes. Whisk in <strong>milk</strong> and ⅓ <strong>cup pasta cooking water</strong> (½ cup for 4), breaking up any flour clumps. Simmer until slightly thickened, 3-4 minutes.
      </li>
      <br />
      <li>&#8226
        Stir <strong>cream cheese</strong> into pan with sauce until melted. Stir in <strong>mushrooms</strong>, <strong>cavatappi</strong>, and <strong>garlic herb butter</strong>. Season with <strong>salt</strong> and <strong>pepper</strong>. <span class="recipeTip">TIP:</span> If needed, stir in more reserved cooking water a splash at a time until pasta is coated in a creamy sauce.
      </li>
      <br />
      <li>&#8226
        Divide <strong>pasta</strong> between bowls and sprinkle with <strong>Parmesan</strong> and <strong>scallion greens</strong>. Serve.
      </li>
    </ul>`,
  },
  {
    //? location: "Top Recipes #2",
    title: 'Ancho BBQ Sloppy Joes',
    about: 'Sloppy joes are the ultimate throwback. The name alone transports us back to the cafeteria line, though, this version is worlds tastier than the ones the lunch lady slung: Think sliced pickles, a smoky BBQ sauce, and a side of hearty potato wedges.',
    info: 'Prep: 15min | Total: 45min | Calories: 820',
    ingredients: `<ul>
        <li>&#8226 Yukon Gold Potatoes (12 ounce)</li>
        <li>&#8226 Potato or Brioche Buns</li>
        <li>&#8226 Beef Stock Concentrate (1 TBSP)</li>
        <li>&#8226 Dill Pickle (1)</li>
        <li>&#8226 Ancho Chili Powder (1 TSP)</li>
        <li>&#8226 Ketchup (2 TBSP)</li>
        <li>&#8226 Ground Beef (10 ounce)</li>
        <li>&#8226 BBQ Sauce (4 TBSP)</li>
        <li>&#8226 Cornstarch (1 TBSP)</li>
        <li>&#8226 Olive Oil (1 TBSP)</li>
        <li>&#8226 Butter (2 TBSP)</li>
        <li>&#8226 Salt & Pepper</li>
      </ul>`,
    instructions: `<ul>
      <li> &#8226
        Adjust rack to top position and preheat oven to 450 degrees. <strong>Wash and dry produce</strong>.<br/> • Cut <strong>potatoes</strong> into ¼-inch-thick rounds. Toss on a baking sheet with a <strong>large drizzle of oil</strong>, <strong>salt</strong>, and <strong>pepper</strong>. Roast on top rack until lightly browned and tender, 18-20 minutes.
      </li>
      <br />
      <li> &#8226
        While potatoes roast, halve, peel, and dice <strong>onion</strong>. Thinly slice <strong>pickle</strong> into rounds. Halve <strong>buns</strong>. <br/>• In a small bowl, combine <strong>BBQ sauce</strong>, <strong>ketchup</strong>, <strong>chili powder</strong>, <strong>stock concentrate</strong>, half the <strong>cornstarch</strong>, and <strong>1 TBSP water</strong>. <em>(For 4 servings, use all the cornstarch and 2 TBSP water.)</em> Set aside.
      </li>
      <br />
      <li>&#8226
        Heat a <strong>drizzle of oil</strong> in a large pan over medium-high heat. Add <strong>onion</strong>; cook, stirring, until softened, 4-5 minutes. <br/>• Add <strong>beef</strong>; season with <strong>salt</strong> and <strong>pepper</strong>. Cook, breaking up meat into pieces, until browned, 3-5 minutes <em>(it’ll finish cooking in the next step)</em>.
      </li>
      <br />
      <li>&#8226
         Add <strong>BBQ sauce mixture</strong> to pan. Cook, stirring, until sauce has thickened and <strong>beef</strong> is cooked through, 2-3 minutes. Taste and season with <strong>salt</strong> and <strong>pepper</strong>. Turn off heat.
      </li>
      <br />
      <li>&#8226
        While filling cooks, toast <strong>buns</strong> until golden brown.
      </li>
      <br />
      <li>&#8226
        Divide <strong>buns</strong> between plates; stuff with as much <strong>beef filling</strong> and <strong>sliced pickle</strong> as you like. Serve with <strong>potato rounds</strong> and any remaining sliced pickle on the side.
      </li>
    </ul>`,
  },
  {
    //? location: "Top Recipes #3",
    title: "Szechuan Beef Noodles",
    about: "Zingy, spicy, and aromatic Szechuan paste with tangy-sweet soy glaze, beef stock concentrate, and a sprinkle of sugar. Totally mouthwatering and packed with umami flavor, it pairs perfectly with ground beef, sautéed cabbage and carrots, and a tangle of chewy ramen noodles. Each bowl is topped with a sprinkle of scallion greens for brightness, plus sesame seeds for nutty crunch. And the best part? It’s all ready in just 15 minutes—now that’s a dinner win!",
    info: "Prep: 10min | Total: 30min | Calories: 850",
    ingredients: `<ul>
        <li>&#8226 Scallions (2-3)</li>
        <li>&#8226 Ground Beef (10 ounce)</li>
        <li>&#8226 Coleslaw (4 oz)</li>
        <li>&#8226 Szechuan Paste (2 TBSP)</li>
        <li>&#8226 Sweet Soy Glaze (4 TBSP)</li>
        <li>&#8226 Beef Stock Concentrate (1 TBSP)</li>
        <li>&#8226 Ramen Noodles (6 oz)</li>
        <li>&#8226 Sesame Seeds (1 TBSP)</li>
        <li>&#8226 Vegetable Oil (1 TSP)</li>
        <li>&#8226 Butter (1 TBSP)</li>
        <li>&#8226 Salt</li>
        <li>&#8226 Sugar (1 TSP)</li>
      </ul>`,
    instructions: `<ul>
      <li> &#8226
        Bring a medium pot of <strong>salted water</strong> to a boil. <strong>Wash and dry produce</strong>. <br/>• Trim and thinly slice <strong>scallions</strong>, separating whites from greens.
      </li>
      <br />
      <li> &#8226
        Heat a <strong>drizzle of oil</strong> in a large pan over medium-high heat. Add <strong>beef</strong> and cook, breaking up meat into pieces, until browned and cooked through, 4-6 minutes. <span class="recipeTip">TIP: If there’s excess grease in your pan, carefully pour it out.</span> <br/>• Stir in <strong>scallion whites</strong> and <strong>coleslaw</strong>; cook until tender, 2-3 minutes.
      </li>
      <br />
      <li>&#8226
        Stir in <strong>Szechuan paste</strong>, <strong>sweet soy glaze</strong>, <strong>stock concentrate</strong>, and <strong>1 tsp sugar</strong> (2 tsp for 4 servings). Cook, stirring, until beef mixture is thoroughly coated in sauce. <br/>• Reduce heat to low.
      </li>
      <br />
      <li>&#8226
         Add <strong>noodles</strong> to pot of boiling water; cook until tender, 1-2 minutes. Drain and thoroughly rinse under cold water, at least 30 seconds. TIP: This stops the cooking and helps prevent sticky noodles. <br/>• Add to pan with <strong>beef mixture</strong> along with <strong>1 TBSP butter</strong> (2 TBSP for 4 servings); toss until noodles are warmed through and everything is combined, 1-2 minutes. <span class="recipeTip">TIP: If needed, add water a splash at a time until noodles are coated in sauce.</span> <br/>• Divide between bowls and top with <strong>scallion greens</strong> and a <strong>pinch of sesame seeds</strong>. Serve.
      </li>
    </ul>`,
  },
  {
    //? location: "Top Recipes #4",
    title: "Taco Cups",
    about: "Simple to create and full of flavor, all wrapped up in a nice little taco package.",
    info: "Prep: 10min | Total: 30min | Calories: 850",
    ingredients: `<ul>
      <li>&#8226 Flour Tortillas (One Dozen).</li>
      <li>&#8226 Diced Tomatoes & Green Chilies (10oz).</li>
      <li>&#8226 Refried Beans (6-8oz).</li>
      <li>&#8226 Ground Beef (3/4 - 1lb).</li>
      <li>&#8226 Taco Seasoning.</li>
    </ul>`,
    needed: `<ul>
      <li>&#8226 12 cup muffin baking sheet.</li>
      <li>&#8226 large bowl.</li>
      <li>&#8226 Olive Oil.</li>
      <li>&#8226 Ground Beef (3/4 - 1lb).</li>
      <li>&#8226 Taco Seasoning.</li>
    </ul>`,
    instructions: `<ul>
      <li>
        &#8226 Preheat the oven to 400 degrees. Heat the olive oil in a large pan over medium high heat.
      </li>
      <li>
        &#8226 Add the beef to the pan. Use a spatula to break up the meat while Cooking for 4-5 minutes or until cooked through.
      </li>
      <li>
       &#8226 While beef cooks, cut the tortillas into 4-inch squares (save lefover ends for later)
      </li>
      <li>
        &#8226 Once beef is finished cooking, 
      </li>
      <li
        &#8226 
      </li>
    </ul>`,
  },
  {
    //? location: "Top Recipes #5",
    title: "Creamy Mushroom Cavatappi",
    about: "If you’re mad for mushrooms, this pasta will treat you right. They’re the flavor backbone of this recipe, bringing all those deep, earthy flavors that you know and love. We’ve added springy cavatappi spirals, a creamy garlic herb sauce, and a sprinkling of Parmesan cheese (mushrooms, pasta, and dairy are pretty much best friends, after all). Get ready for this umami bomb to make waves at your dinner table!",
    info: "Prep: 10min | Total: 45min | Calories: 750",
    ingredients: `<ul>
        <li>&#8226 Scallions (2-3)</li>
        <li>&#8226 Cavatappi Pasta (8 oz)</li>
        <li>&#8226 Button Mushrooms (8 oz)</li>
        <li>&#8226 Flour (1 TBSP)</li>
        <li>&#8226 Milk (6.75 oz)</li>
        <li>&#8226 Cream Cheese or Mascarpone (2 TBSP)</li>
        <li>&#8226 Garlic Herb Butter (2 TBSP)</li>
        <li>&#8226 Parmesan Cheese (1/4 cup)</li>
        <li>&#8226 Olive Oil (2 TSP)</li>
        <li>&#8226 Butter (2 TBSP)</li>
        <li>&#8226 Salt & Pepper</li>
      </ul>`,
    instructions: `<ul>
      <li> &#8226
        Bring Medium Pot of <strong>salted water</strong> to a boil. <strong>Wash/dry all produce</strong>. Trim and Slice <strong>mushrooms</strong> into 1/4-inch-thick pieces. Trim and thinly slice <strong>scallions</strong>, seperating whites from greens.
      </li>
      <br />
      <li> &#8226
        Heat a large drizzle of <strong>olive oil</strong> in a large pan over medium-high heat. Add <strong>mushrooms</strong>; season with <strong>salt</strong> and <strong>pepper</strong>. Cook, stiring occasionally, until browned and slightly crispy, 5-7 minutes. Turn off heat; transfer to a paper-towel-lined plate. Wash out pan.
      </li>
      <br />
      <li>&#8226
        Once water is boiling, add <strong>cavatappi</strong> to pot. Cook, stirring occasionally, until aldente, 9-11 minutes. Reserve <strong>1 cup pasta cooking water</strong>, then drain.
      </li>
      <br />
      <li>&#8226
        While pasta cooks, melt <strong>2 TBSP plain butter</strong> (4 TBSP for 4 servings) in pan used for mushrooms over medium-high heat. Add <strong>scallion whites</strong> and cook until just softened, 1 minute. Add <strong>flour</strong> and cook, stirring, until lightly browned, 1-2 minutes. Whisk in <strong>milk</strong> and ⅓ <strong>cup pasta cooking water</strong> (½ cup for 4), breaking up any flour clumps. Simmer until slightly thickened, 3-4 minutes.
      </li>
      <br />
      <li>&#8226
        Stir <strong>cream cheese</strong> into pan with sauce until melted. Stir in <strong>mushrooms</strong>, <strong>cavatappi</strong>, and <strong>garlic herb butter</strong>. Season with <strong>salt</strong> and <strong>pepper</strong>. <span class="recipeTip">TIP:</span> If needed, stir in more reserved cooking water a splash at a time until pasta is coated in a creamy sauce.
      </li>
      <br />
      <li>&#8226
        Divide <strong>pasta</strong> between bowls and sprinkle with <strong>Parmesan</strong> and <strong>scallion greens</strong>. Serve.
      </li>
    </ul>`,
  },
  {
    //? location: "Top Recipes #6",
    title: "Creamy Mushroom Cavatappi",
    about: "If you’re mad for mushrooms, this pasta will treat you right. They’re the flavor backbone of this recipe, bringing all those deep, earthy flavors that you know and love. We’ve added springy cavatappi spirals, a creamy garlic herb sauce, and a sprinkling of Parmesan cheese (mushrooms, pasta, and dairy are pretty much best friends, after all). Get ready for this umami bomb to make waves at your dinner table!",
    info: "Prep: 10min | Total: 45min | Calories: 750",
    ingredients: `<ul>
        <li>&#8226 Scallions (2-3)</li>
        <li>&#8226 Cavatappi Pasta (8 oz)</li>
        <li>&#8226 Button Mushrooms (8 oz)</li>
        <li>&#8226 Flour (1 TBSP)</li>
        <li>&#8226 Milk (6.75 oz)</li>
        <li>&#8226 Cream Cheese or Mascarpone (2 TBSP)</li>
        <li>&#8226 Garlic Herb Butter (2 TBSP)</li>
        <li>&#8226 Parmesan Cheese (1/4 cup)</li>
        <li>&#8226 Olive Oil (2 TSP)</li>
        <li>&#8226 Butter (2 TBSP)</li>
        <li>&#8226 Salt & Pepper</li>
      </ul>`,
    instructions: `<ul>
      <li> &#8226
        Bring Medium Pot of <strong>salted water</strong> to a boil. <strong>Wash/dry all produce</strong>. Trim and Slice <strong>mushrooms</strong> into 1/4-inch-thick pieces. Trim and thinly slice <strong>scallions</strong>, seperating whites from greens.
      </li>
      <br />
      <li> &#8226
        Heat a large drizzle of <strong>olive oil</strong> in a large pan over medium-high heat. Add <strong>mushrooms</strong>; season with <strong>salt</strong> and <strong>pepper</strong>. Cook, stiring occasionally, until browned and slightly crispy, 5-7 minutes. Turn off heat; transfer to a paper-towel-lined plate. Wash out pan.
      </li>
      <br />
      <li>&#8226
        Once water is boiling, add <strong>cavatappi</strong> to pot. Cook, stirring occasionally, until aldente, 9-11 minutes. Reserve <strong>1 cup pasta cooking water</strong>, then drain.
      </li>
      <br />
      <li>&#8226
        While pasta cooks, melt <strong>2 TBSP plain butter</strong> (4 TBSP for 4 servings) in pan used for mushrooms over medium-high heat. Add <strong>scallion whites</strong> and cook until just softened, 1 minute. Add <strong>flour</strong> and cook, stirring, until lightly browned, 1-2 minutes. Whisk in <strong>milk</strong> and ⅓ <strong>cup pasta cooking water</strong> (½ cup for 4), breaking up any flour clumps. Simmer until slightly thickened, 3-4 minutes.
      </li>
      <br />
      <li>&#8226
        Stir <strong>cream cheese</strong> into pan with sauce until melted. Stir in <strong>mushrooms</strong>, <strong>cavatappi</strong>, and <strong>garlic herb butter</strong>. Season with <strong>salt</strong> and <strong>pepper</strong>. <span class="recipeTip">TIP:</span> If needed, stir in more reserved cooking water a splash at a time until pasta is coated in a creamy sauce.
      </li>
      <br />
      <li>&#8226
        Divide <strong>pasta</strong> between bowls and sprinkle with <strong>Parmesan</strong> and <strong>scallion greens</strong>. Serve.
      </li>
    </ul>`,
  },
];

//? Main Recipe Section

const mainRecipeArr = [
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>instructions here instructions here instructions here</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>`,
  },
  {
    //? location: "Main Recipes",
    title: "Main Recipe Section Test",
    info: "Test Test Test",
    ingredients: "&#8226 Test Test",
    instructions: `<ul>
      <li>Preheat the oven to 400 degrees. Heat the olive oil in a large pan over medium high heat.</li>
      <li>Add the beef to the pan. Use a spatula to break up the meat. Cook the meat for 4-5 minutes or until cooked through.</li>
      <li>While beef cooks, cut the round tortillas into 4-inch squares</li>
      <li></li>
      <li></li>
    </ul>`,
  },
];

let recipesArr = topRecipeArr.concat(mainRecipeArr);
// }

export default recipesArr;
