import { createFileRoute } from '@tanstack/react-router'
import { Text } from "@politiet/pds";
// import { getContent } from "./utils/cdaUtils";

export const Route = createFileRoute('/hendelser/$hendelseId')({
  component: HendelseComponent,
})

function HendelseComponent() {
  const { hendelseId } = Route.useParams()
  
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