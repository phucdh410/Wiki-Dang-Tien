import { CDivider, CRecipe, CSubtitle, CTitle } from "@/components/common";

export default function MysteriousItems() {
  return (
    <div className="space-y-14">
      <div className="space-y-10">
        <CTitle
          label="Tianji House"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717250001919_152_exZcz1aU0d.png"
        />

        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>The Heavenly Mystery House contains a huge, private space.</li>
            <li>
              The Heavenly Secrets House is created by placing the Heavenly
              Secrets Scroll.
            </li>
            <li>
              Once a Heavenly Mystery House is placed, the Heavenly Mystery
              Scroll will automatically convert into a Heavenly Mystery Token,
              which can then be used to reclaim the Heavenly Mystery House.
            </li>
            <li>
              Each person&apos;s Heavenly Secrets House has its own independent
              space.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle
            label="Heavenly Secret Scroll"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717250001919_152_RI7aT20gql.png"
          />
          <CDivider />
          <CRecipe
            ingredients={[
              {
                name: "Papyrus",
                image: "https://dontstarve.wiki.gg/images/Papyrus.png",
                quantity: 7,
              },
              {
                name: "Living Log",
                image: "https://dontstarve.wiki.gg/images/Living_Log.png",
                quantity: 6,
              },
              {
                name: "Marble",
                image: "https://dontstarve.wiki.gg/images/Marble.png",
                quantity: 15,
              },
              {
                name: "Low-grade Spirit Stone",
                image: "/low-grade-stone.png",
                quantity: 45,
              },
            ]}
          />
        </div>
        <div>
          <CSubtitle
            label="Heavenly Secret Token"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717250001919_152_Ez0LMFIVsC.png"
          />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              Used for recycling the Heavenly Secrets House, generated when the
              Heavenly Secrets Scroll is placed.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Palm Heaven Bottle"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717247688158_152_EpsKjDUytv.png"
        />
        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CRecipe
            ingredients={[
              { name: "Kirin Antler", quantity: 1, image: "/kirin-antler.png" },
              {
                name: "Moon Shard",
                quantity: 6,
                image: "https://dontstarve.wiki.gg/images/Moon_Shard.png",
              },
              {
                name: "Blue Gem",
                quantity: 3,
                image: "https://dontstarve.wiki.gg/images/Blue_Gem.png",
              },
              {
                name: "Low-grade Spirit Stone",
                quantity: 30,
                image: "/low-grade-stone.png",
              },
            ]}
          />
        </div>
        <ul className="list-disc pl-6 marker:text-xl">
          <li>Durability can be restored at night.</li>
          <li>
            It has a ripening effect on both crops and crabapple trees. Each use
            consumes 100% of the durability of crabapple trees and 50% of the
            durability of crops.
          </li>
        </ul>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Soul-Nourishing Dagger"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717242887764_152_1o8oCTQ8hA.png"
        />
        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CRecipe
            ingredients={[
              {
                name: "Shadow Atrium",
                quantity: 1,
                image: "https://dontstarve.wiki.gg/images/Shadow_Atrium.png",
              },
              {
                name: "Nightmare Fuel",
                quantity: 10,
                image: "https://dontstarve.wiki.gg/images/Nightmare_Fuel.png",
              },
              {
                name: "Living Log",
                quantity: 5,
                image: "https://dontstarve.wiki.gg/images/Living_Log.png",
              },
              {
                name: "Low-grade Spirit Stone",
                quantity: 30,
                image: "/low-grade-stone.png",
              },
            ]}
          />
          <ul className="list-disc pl-6 marker:text-xl mt-4">
            <li>
              Right click to summons a Soul Wolf; each summon consumes 5
              Low-grade Spirit Stones.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle
            label="Soul Wolf"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717243048281_152_KrJoWJXsDO.png"
          />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl mt-4">
            <li>
              The Soul Wolf will exist for half a day and can help players walk
              on water and perform a certain degree of teleportation.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Heart-protecting jade pendant"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717247688151_152_nbGvNADdsE.png"
        />

        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CRecipe
            ingredients={[
              {
                name: "Spider Gland",
                image: "https://dontstarve.wiki.gg/images/Spider_Gland.png",
                quantity: 3,
              },
              {
                name: "Living Log",
                image: "https://dontstarve.wiki.gg/images/Living_Log.png",
                quantity: 15,
              },
              {
                name: "Gold",
                image: "https://dontstarve.wiki.gg/images/Gold_Nugget.png",
                quantity: 10,
              },
              {
                name: "Low-grade Spirit Stone",
                image: "/low-grade-stone.png",
                quantity: 30,
              },
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Spiritual Treasure Abilities" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              It helps cultivators escape when they are on the verge of death,
              but it requires a certain amount of spirit stones. The higher the
              cultivation level, the more spirit stones are required.
            </li>
            <li>
              When a character is in the Qi Refining stage, 30 low-grade spirit
              stones are consumed when escaping.
            </li>
            <li>
              When a character is in the Foundation Establishment stage, 50
              low-grade spirit stones are consumed when escaping.
            </li>
            <li>
              When a character is in the Core Formation stage, 1 mid-grade
              spirit stone is consumed when escaping.
            </li>
            <li>
              When a character is in the Nascent Soul stage, escaping consumes 2
              mid-grade spirit stones.
            </li>
            <li>
              When a character is in the Nascent Soul stage, escaping consumes 3
              mid-grade spirit stones.
            </li>
            <li>CD is valid for 3 days.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
