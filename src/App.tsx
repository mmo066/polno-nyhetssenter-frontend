import { Text } from "@politiet/pds";
// import { getContent } from "./utils/cdaUtils";
function App() {
  return (
    <article className="nyhetssenter">
      <Text isSectionTitle styleAs="h2" type="h2">
        Politiets nyhetssenter
      {/* {getContent(cdaText, 'seksjonsingressSportsvåpen')} */}
      </Text>
        {/* add web component here */}
    </article>
  );
}

export default App;
