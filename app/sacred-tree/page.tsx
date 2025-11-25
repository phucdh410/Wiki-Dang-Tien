import {
  CConsumptionRecovery,
  CDivider,
  CSubtitle,
  CTitle,
  CList,
} from "@/components/common";

export default function SacredTree() {
  return (
    <div className="space-y-14">
      <div className="space-y-10">
        <CTitle
          label="Sand Pear Tree"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717247688157_152_e9RnoXxD81.png"
        />

        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CList
            list={[
              "It provides the same shade size and range of cooling, rain protection, and lightning protection as a regular giant tree.",
              "The shade of trees and the giant treehouse have a restorative effect.",
              "When the tree first grows into a giant tree, it will produce a single sand-fruit vine. Players can directly harvest the sand-fruits from this vine, after which the entire vine will disappear. Afterward, a new sand-fruit vine will produce every two days. The maximum number of sand-fruit vines that can hang is two; once this limit is reached, no more sand-fruit vines will produce.",
              "There is a wooden house at the base of the crabapple tree, which provides a small-scale lighting effect. At the same time, the temperature inside the wooden house is constant and bright.",
            ]}
          />
        </div>
        <div>
          <CSubtitle
            label="Root of the sand crabapple tree"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717247688151_152_ZcTL91pI9K.png"
          />
          <CDivider />
          <CList
            list={[
              "There is a 50% chance that the roots of a sand pear tree will be retrieved directly when salvaging wood from the water.",
              "Watering the roots of the sand pear tree with the palm-shaped bottle can help it grow to the second stage.",
            ]}
          />
        </div>
        <div>
          <CSubtitle
            label="Second stage of the sand pear tree"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717247688158_152_baPrE8IibS.png"
          />
          <CDivider />
          <CList
            list={[
              "The second-stage Shatang tree only has half the sanity recovery effect of the mature Shatang tree.",
            ]}
          />
        </div>
        <div>
          <CSubtitle
            label="Crabapple"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717247688151_152_y01d71Vu3E.png"
          />
          <CDivider />
          <CConsumptionRecovery hunger={47.5} sanity={7} health={3} />
          <CList
            className="mt-4"
            list={[
              "Only one can be consumed every two days, allowing players to walk on water within a single day.",
              "It takes 15 days to decompose.",
            ]}
          />
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Drunken Spring Mist"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1737277563759_152_8xVKNxXY7Y.png"
        />

        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CList
            list={[
              "The tree that was generated on Kunpeng Immortal Island.",
              "Standing near the mature Drunken Spring Mist will slowly restore 0.5% of your health every 6 seconds.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Drunken Plum" />
          <CDivider />
          <CConsumptionRecovery hunger={12} sanity={5} health={2} />
          <CList
            className="mt-4"
            list={["It can be used to grow Tobacco denudata."]}
          />
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Tree of Resurrection"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1736861903726_152_NA8PWICgvz.png"
        />

        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CList
            list={[
              "It provides the same shade size and range of cooling, rain protection, and lightning protection as a regular giant tree.",
              "The shade of trees and the giant treehouse have a restorative effect.",
              "One Resurrection Fruit Vine is generated every 3 days. The maximum number of vines that can hang is 2. Once the maximum of 2 is reached, no more Resurrection Fruit Vine will be generated.",
              "There is a treehouse at the base of the tree, which has a small-scale glowing effect. At the same time, the temperature inside the treehouse is constant and bright, and health can be slowly restored inside, restoring 0.5% per second, and sanity can be restored by 8 points per minute.",
              "The treehouse will contain the legacy of your predecessors.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Resurrection effect" />
          <CDivider />
          <CList
            list={[
              "Players have two opportunities to solidify their physical body. Upon death, they can be resurrected by haunting the Resurrection Tree. Each resurrection attempt consumes one attempt from the Resurrection Tree. This resurrection attempt replenishes at a rate of 1 point per day, up to a maximum of 2 points.",
            ]}
          />
        </div>
        <div>
          <CSubtitle
            label="Resurrection Fruit"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1736861903726_152_urkUyX7pIE.png"
          />
          <CDivider />
          <CConsumptionRecovery hunger={15} sanity={20} health={5} />
          <CList
            className="mt-4"
            list={[
              "Furthermore, after consumption, it will restore 2 points of health every 2 seconds for a day (affected by realm bonus) and 6 points of sanity every minute.",
            ]}
          />
        </div>
        <div>
          <CSubtitle
            label="Rebirth Incense"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1736861903726_152_mYygS1iNSU.png"
          />
          <CDivider />
          <CConsumptionRecovery hunger={67.5} sanity={25} health={45} />
          <CList
            className="mt-4"
            list={[
              "Cooking requires Resurrection Fruit + Meat content greater than 0 + Egg content greater than 0 + Vegetable content greater than 0",
              "Additional effect: While this food effect is active, if a player dies leaving bones on the ground, the player can be resurrected by haunting the bones.",
            ]}
          />
        </div>
        <div>
          <CSubtitle
            label="Resurrected Fruit Candy"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1736861903726_152_HuHu3DBZ1S.png"
          />
          <CDivider />
          <CConsumptionRecovery hunger={20} sanity={22} health={7} />
          <CList
            className="mt-4"
            list={[
              "Cooking requires Resurrection Fruit + 0% Meat + other fillers",
              "Furthermore, after consumption, it will restore 3 points of health every 2 seconds (affected by realm bonus) and 6 points of sanity every minute within a day.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
