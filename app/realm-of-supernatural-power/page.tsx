import {
  CDivider,
  CList,
  CMinititle,
  CRecipe,
  CSubtitle,
  CTitle,
} from "@/components/common";

export default function RealmOfSupernaturalPower() {
  return (
    <div className="space-y-14">
      <div className="space-y-10">
        <CTitle
          label="Supreme Demonic Body and Golden Body of Merit"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717304744144_152_TD4jQXUrT0.png"
        />
        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CList
            list={[
              "When a character reaches the Core Formation stage, they can form either a Supreme Demonic Body or a Golden Body of Merit based on the corresponding conditions before Core Formation. If a cultivator is present within six tiles of land before Core Formation, or if the character dies, one point of inner demon is accumulated. When the inner demon reaches 7 points, a Supreme Demonic Body will be formed upon reaching the Core Formation stage; otherwise, a Golden Body of Merit will be formed.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Merit Golden Body" />
          <CDivider />
          <CList
            list={[
              "When your health reaches zero, you will not die; your health will instantly recover to 100%. Furthermore, you are invincible for 5 seconds during this state. There is a one-day cooldown.",
              "There is a chance that a golden statue will fall from the sky to assist in the attack.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Supreme Demon Body" />
          <CDivider />
          <CList
            list={[
              "When a cultivator's health reaches zero, they will not die, but will be locked at 1 point. Furthermore, a ghostly hand will appear nearby with health equal to 10 times the cultivator's health. The cultivator will only escape the locked health state if all ghostly hands are destroyed or disappear after 30 seconds. Damage taken from the ghostly hands will be transferred to the cultivator. Cooldown: 480 seconds (per day).",
              "There is a chance that the attack will trigger an auxiliary attack from the three demonic clones.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Transform into a puppet"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717251823345_152_THHOdHuLDu.png"
        />
        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CRecipe
            ingredients={[
              {
                name: "Phoenix Marrow",
                quantity: 1,
                image: "/phoenix-marrow.png",
              },
              {
                name: "Gold Nugget",
                quantity: 7,
                image: "https://dontstarve.wiki.gg/images/Gold_Nugget.png",
              },
              {
                name: "Red Gem",
                quantity: 1,
                image: "https://dontstarve.wiki.gg/images/Red_Gem.png",
              },
              {
                name: "Low-grade Spirit Stone",
                quantity: 30,
                image: "/low-grade-stone.png",
              },
            ]}
          />
          <CList
            className="mt-4"
            list={[
              "Foundation building period can be used",
              'You can summon an external avatar by right-clicking the item "Divine Sense Puppet", and then right-click the "Divine Sense Puppet" to recall the external avatar.',
              "By clicking the X button, you can recall summoned entities imbued with your divine consciousness, including external avatars and summoned entities of the player themselves.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Avatar" />
          <CDivider />
          <CList
            list={[
              "When an avatar attacks a target resembling an armored bear badger, it can remove the target's dimensional entity resistance.",
              "If the character is recalled or their avatar dies, a 120-second cooldown will occur.",
              "A cultivator can only summon one avatar.",
              "The avatar has its own inventory, which only the player can view. It will automatically wear armor and helmet in order, and the durability of the helmet and armor will be consumed normally when attacked.",
              "Health will slowly recover after 30 seconds out of combat.",
              "When your avatar dies, all equipment in your inventory and backpack will be dropped.",
              "When you recall your avatar, the equipment in your inventory and backpack will be saved to the avatar.",
              'The avatar has an "unarmor" button, which will remove the equipment that the avatar is currently wearing. The equipment will be removed and fall to the ground.',
              "An avatar can gain increased damage equivalent to the main character by consuming foods that increase attack power, such as chili powder, croissant, and wearing steam helmets.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="The existence of an external avatar consumes spirit stones." />
          <CDivider />
          <CList
            list={[
              "When the avatar is in the Qi Refining stage, it requires 1 low-grade spirit stone every 60 seconds.",
              "When the avatar is in the Foundation Establishment stage, it requires 1 low-grade spirit stone every 42 seconds.",
              "When the external avatar is in the Core Formation stage, it requires 1 low-grade spirit stone every 24 seconds.",
              "When the avatar is in the Nascent Soul stage, it requires 1 low-grade spirit stone every 15 seconds.",
              "When the external avatar is in the Nascent Soul stage, it requires 1 mid-grade spirit stone every 480 seconds.",
              "When the external avatar is in the Void Returning stage, it requires 1 Medium-grade Spirit Stone every 360 seconds.",
              "When the avatar is in the Fusion stage, it requires 1 Medium-grade Spirit Stone every 240 seconds.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="External avatar cultivation" />
          <CDivider />
          <CList
            list={[
              "An external avatar possesses the Qi Refining realm, which can reach the highest level of Body Integration. Damage increases with each higher realm.",
              "By directly feeding demon beast materials or pills to an avatar, it can gain cultivation.",
              "The following materials can be used to enhance cultivation: High-grade Spirit Stone, Supreme-grade Spirit Stone, Shadow Rose, Guardian's Horn, Sandstone, Bear Hide, Royal Jelly, Cracked Pearl, Giant Deer Eyeball, Giant Deer Eyeball, Scales, Elk and Goose Feather, Evil Beetle Beak, Mushroom Skin, Enlightenment Fragment, Milky White Matter, Shadow Heart Chamber, Pure Fear, Sapphire, Ruby, Amethyst, Orange Gem, Topaz, Emerald, Rainbow Gem, Qilin Antler, Phoenix Marrow, Qi Gathering Pill, Body Tempering Pill, Foundation Building Pill, Marrow Cleansing Pill, Crystallization Pill, Cloud Pill, Meridian Combing Pill, Spirit Fusion Pill, Nascent Soul Pill.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Immortal Demon Sword of the Divine Transformation Realm"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1737282073904_152_YQblWA30rT.png"
        />
        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CList
            list={[
              "When a character reaches the Nascent Soul stage, depending on whether the cultivator possesses the Supreme Demonic Body or the Golden Body of Merit, they can activate either the Immortal Sword or the Demonic Sword by clicking the corresponding icon in the Immortal Path crafting interface. Clicking it again will retract the sword.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Immortal Demon Sword Divine Power" />
          <CDivider />
          <CList
            list={[
              "When the Immortal Sword or Demon Sword is activated, it will launch a coordinated attack based on the number of times the player attacks.",
              "Clicking the X button releases the corresponding skill. The Sword and Fairy skill can be unleashed three times, and clicking again will activate its ultimate power. The Demon Sword skill can be unleashed twice.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Qi Refining Realm"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717304599433_152_d12tdBpFeo.png"
        />
        <div>
          <CSubtitle label="The pills required for breaking through the Qi Refining realm are as follows:" />
          <CDivider />

          <ol className="relative border-s border-gray-300 text-body">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Early stage of Qi Refining → Middle stage of Qi Refining
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Gathering Qi Pills"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202264_152_pmYq5ITf6b.png"
                  />
                }
                ingredients={[
                  {
                    name: "Stinger",
                    quantity: 10,
                    image: "https://dontstarve.wiki.gg/images/Stinger.png",
                  },
                  {
                    name: "Spider Gland",
                    quantity: 5,
                    image: "https://dontstarve.wiki.gg/images/Spider_Gland.png",
                  },
                  {
                    name: "Tallbird Egg",
                    quantity: 1,
                    image: "https://dontstarve.wiki.gg/images/Tallbird_Egg.png",
                  },
                  {
                    name: "Low-grade Spirit Stone",
                    quantity: 10,
                    image: "/low-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Mid-stage Qi Refining → Late-stage Qi Refining
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Sharpened round"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202264_152_5O5XuoBJL2.png"
                  />
                }
                ingredients={[
                  {
                    name: "Koalefant Trunk",
                    quantity: 1,
                    image:
                      "https://dontstarve.wiki.gg/images/Koalefant_Trunk.png",
                    subs: [
                      {
                        name: "Winter Koalefant Trunk",
                        image:
                          "https://dontstarve.wiki.gg/images/Winter_Koalefant_Trunk.png",
                      },
                    ],
                  },
                  {
                    name: "Pig Skin",
                    quantity: 3,
                    image: "https://dontstarve.wiki.gg/images/Pig_Skin.png",
                  },
                  {
                    name: "Red Gem",
                    quantity: 3,
                    image: "https://dontstarve.wiki.gg/images/Red_Gem.png",
                  },
                  {
                    name: "Low-grade Spirit Stone",
                    quantity: 30,
                    image: "/low-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Late Qi Refining Stage → Early Foundation Establishment Stage
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Chikkitan"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202265_152_NegVj8qrk0.png"
                  />
                }
                ingredients={[
                  {
                    name: "Scales",
                    quantity: 1,
                    image: "https://dontstarve.wiki.gg/images/Scales.png",
                  },
                  {
                    name: "Hound's Tooth",
                    quantity: 10,
                    image:
                      "https://dontstarve.wiki.gg/images/Hound's_Tooth.png",
                  },
                  {
                    name: "Living Log",
                    quantity: 3,
                    image: "https://dontstarve.wiki.gg/images/Living_Log.png",
                  },
                  {
                    name: "Medium-grade Spirit Stone",
                    quantity: 1,
                    image: "/medium-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Early stage of foundation building → Middle stage of foundation
                building
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Marrow Cleansing Pill"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202265_152_yz6yWKdlG6.png"
                  />
                }
                ingredients={[
                  {
                    name: "Glow Berry",
                    quantity: 3,
                    image: "https://dontstarve.wiki.gg/images/Glow_Berry.png",
                  },
                  {
                    name: "Light Bulb",
                    quantity: 10,
                    image: "https://dontstarve.wiki.gg/images/Light_Bulb.png",
                  },
                  {
                    name: "Broken Shell",
                    quantity: 3,
                    image:
                      "https://dontstarve.wiki.gg/images/Broken_Shell_(DST).png",
                  },
                  {
                    name: "Low-grade Spirit Stone",
                    quantity: 20,
                    image: "/low-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Late Foundation Establishment → Early Core Formation
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Yunzhongdan"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202265_152_Kxjnf1bM1z.png"
                  />
                }
                ingredients={[
                  {
                    name: "Kirin Antler",
                    quantity: 1,
                    image: "/kirin-antler.png",
                  },
                  {
                    name: "Red Spore",
                    quantity: 10,
                    image: "https://dontstarve.wiki.gg/images/Red_Spore.png",
                    subs: [
                      {
                        name: "Blue Spore",
                        image:
                          "https://dontstarve.wiki.gg/images/Blue_Spore.png",
                      },
                      {
                        name: "Green Spore",
                        image:
                          "https://dontstarve.wiki.gg/images/Green_Spore.png",
                      },
                    ],
                  },
                  {
                    name: "Bunny Puff",
                    quantity: 5,
                    image: "https://dontstarve.wiki.gg/images/Bunny_Puff.png",
                  },
                  {
                    name: "Medium-grade Spirit Stone",
                    quantity: 2,
                    image: "/medium-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Early Core Formation Stage → Mid-Core Formation Stage
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Shumaimaru"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202265_152_DiLQON46Mi.png"
                  />
                }
                ingredients={[
                  {
                    name: "Royal Jelly",
                    quantity: 1,
                    image: "https://dontstarve.wiki.gg/images/Royal_Jelly.png",
                  },
                  {
                    name: "Salt Crystals",
                    quantity: 15,
                    image:
                      "https://dontstarve.wiki.gg/images/Salt_Crystals.png",
                  },
                  {
                    name: "Fig",
                    quantity: 10,
                    image: "https://dontstarve.wiki.gg/images/Fig.png",
                  },
                  {
                    name: "Low-grade Spirit Stone",
                    quantity: 30,
                    image: "/low-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Mid-stage Core Formation → Late-stage Core Formation
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Melting Maru"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202264_152_rZ8fPoPU6C.png"
                  />
                }
                ingredients={[
                  {
                    name: "Shadow Rose",
                    quantity: 1,
                    image: "/shadow-rose.png",
                  },
                  {
                    name: "Gnarwail Horn",
                    quantity: 1,
                    image:
                      "https://dontstarve.wiki.gg/images/Gnarwail_Horn.png",
                  },
                  {
                    name: "Cookie Cutter Shell",
                    quantity: 7,
                    image:
                      "https://dontstarve.wiki.gg/images/Cookie_Cutter_Shell.png",
                  },
                  {
                    name: "Medium-grade Spirit Stone",
                    quantity: 1,
                    image: "/medium-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Late Core Formation Stage → Early Nascent Soul Stage
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Nascent Soul Pill"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202264_152_Fm1GnHDjbF.png"
                  />
                }
                ingredients={[
                  {
                    name: "Phoenix Marrow",
                    quantity: 1,
                    image: "/phoenix-marrow.png",
                  },
                  {
                    name: "Shroom Skin",
                    quantity: 1,
                    image: "https://dontstarve.wiki.gg/images/Shroom_Skin.png",
                  },
                  {
                    name: "Butter",
                    quantity: 1,
                    image: "https://dontstarve.wiki.gg/images/Butter.png",
                  },
                  {
                    name: "Medium-grade Spirit Stone",
                    quantity: 3,
                    image: "/medium-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Late Core Formation Stage → Early Nascent Soul Stage
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Nascent Soul Pill"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717253202264_152_Fm1GnHDjbF.png"
                  />
                }
                ingredients={[
                  {
                    name: "Rabbit King Cudgel",
                    quantity: 1,
                    image:
                      "https://dontstarve.wiki.gg/images/Rabbit_King_Cudgel.png",
                  },
                  {
                    name: "Dark Tatters",
                    quantity: 8,
                    image:
                      "https://dontstarve.wiki.gg/images/Dark_Tatters_DST.png",
                  },
                  {
                    name: "Accursed Trinket",
                    quantity: 5,
                    image:
                      "https://dontstarve.wiki.gg/images/Accursed_Trinket.png",
                  },
                  {
                    name: "Top-grade Spirit Stone",
                    quantity: 1,
                    image: "/top-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Mid-Nascent Soul Stage → Late-Nascent Soul Stage
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Concentration Pill"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1737271918151_152_x5gCf8wii4.png"
                  />
                }
                ingredients={[
                  {
                    name: "Enlightened Shard",
                    quantity: 1,
                    image:
                      "https://dontstarve.wiki.gg/images/Enlightened_Shard.png",
                  },
                  {
                    name: "Brightshade Husk",
                    quantity: 4,
                    image:
                      "https://dontstarve.wiki.gg/images/Brightshade_Husk.png",
                  },
                  {
                    name: "Milky Whites",
                    quantity: 3,
                    image: "https://dontstarve.wiki.gg/images/Milky_Whites.png",
                  },
                  {
                    name: "High-grade Spirit Stone",
                    quantity: 1,
                    image: "/high-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Late Nascent Soul Stage → Early Deity Transformation Stage
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Transformation Pill"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1737271918151_152_jVWSgnwBOw.png"
                  />
                }
                ingredients={[
                  {
                    name: "Golden Tiger Skin",
                    quantity: 1,
                    image:
                      "http://39.107.158.116/api/image?type=general&sectionId=24&name=1737271044166_152_isotyF8ZI8.png",
                  },
                  {
                    name: "Pure Horror",
                    quantity: 8,
                    image: "https://dontstarve.wiki.gg/images/Pure_Horror.png",
                  },
                  {
                    name: "Pure Brilliance",
                    quantity: 8,
                    image:
                      "https://dontstarve.wiki.gg/images/Pure_Brilliance.png",
                  },
                  {
                    name: "Top-grade Spirit Stone",
                    quantity: 1,
                    image: "/top-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Early stage of Nascent Soul Transformation → Mid stage of
                Nascent Soul Transformation
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Kaigenmaru"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1737271918151_152_llcQMWQ0zj.png"
                  />
                }
                ingredients={[
                  {
                    name: "Evil Steps",
                    quantity: 1,
                    image:
                      "http://39.107.158.116/api/image?type=general&sectionId=24&name=1736254260238_152_eSdzyxU3Vi.png",
                  },
                  {
                    name: "Spirit Fox Tail",
                    quantity: 3,
                    image:
                      "http://39.107.158.116/api/image?type=general&sectionId=24&name=1736253633923_152_DYCEXe34dx.png",
                  },
                  {
                    name: "Delicate Feather",
                    quantity: 2,
                    image:
                      "http://39.107.158.116/api/image?type=general&sectionId=24&name=1737273422431_152_1I9Xcl7bDr.png",
                  },
                  {
                    name: "High-grade Spirit Stone",
                    quantity: 1,
                    image: "/high-grade-stone.png",
                  },
                ]}
              />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
              <span className="text-md font-medium text-dark-subtle">
                Mid-stage Nascent Soul → Late-stage Nascent Soul
              </span>
              <CRecipe
                className="mt-2"
                customTitle={
                  <CMinititle
                    label="Goryomaru"
                    image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1737271918151_152_fwi7auMpSy.png"
                  />
                }
                ingredients={[
                  {
                    name: "Pure Demon Feather",
                    quantity: 1,
                    image:
                      "http://39.107.158.116/api/image?type=general&sectionId=24&name=1737275156841_152_MZTRTW6bR3.png",
                  },
                  {
                    name: "Demonic Claw Bone",
                    quantity: 1,
                    image:
                      "http://39.107.158.116/api/image?type=general&sectionId=24&name=1737274505246_152_wwv9l6tER7.png",
                  },
                  {
                    name: "Shadow Atrium",
                    quantity: 2,
                    image:
                      "https://dontstarve.wiki.gg/images/Shadow_Atrium.png",
                  },
                  {
                    name: "High-grade Spirit Stone",
                    quantity: 1,
                    image: "/high-grade-stone.png",
                  },
                ]}
              />
            </li>
          </ol>
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Body Tempering Realm"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717251520153_152_LYomUnDuOB.png"
        />
        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CList
            list={[
              "The Body Tempering Realm is divided into Meridian Opening, Bone Tempering, Internal Organ Refining, Yuanwu, Divine Power, Void Breaking, and Returning to Origin. Each realm is divided into 15 levels, but the Returning to Origin stage is only open for the first level for the time being.",
              "Each level will provide players with a certain increase in attack power and maximum health.",
              "Players gain experience from the death of any creature within a 28-radius radius of the player. Experience is not reduced when multiple players are present.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Primal Inclination and the Demon Spirit Sacred Body System"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1717255450208_152_F9aYoTsCPq.png"
        />
        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CList
            list={[
              "Origin Tilt is a separate switch in the Monster Enhancement section's module settings interface, labeled 'Realm of All Things,' which controls whether it's enabled or disabled.",
              'Every living being has an "Original Inclination" system, which is the original spiritual energy tendency of the living being, namely metal, wood, water, fire, earth, Wuji, and Hunyuan. Furthermore, the original spiritual energy of a living being has a degree of tendency, which is divided into "weak", "normal", "strong" and "extreme".',
              'Creatures with an inclination level of "Extreme" will simultaneously possess three supernatural abilities: "Weak", "Normal", and "Strong".',
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Earth attribute corresponding supernatural power" />
          <CDivider />
          <CList
            list={[
              'Earth attribute "weak" corresponding supernatural power: If a normal attack hits a cultivator, it will create a ground pit and have a slowing effect.',
              "Earth attribute (normal) corresponding divine ability: Generates large-area sand and gravel area damage.",
              'Earth attribute "Strong" corresponding divine ability: Forms a barrier, but after a few seconds these stones shatter, causing an area-of-effect damage at the center.',
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Wood attribute corresponds to supernatural powers" />
          <CDivider />
          <CList
            list={[
              'The corresponding supernatural power of the Wood attribute "Weak": Each time an attack hits a cultivator, it summons vines to launch an attack.',
              "Wood attribute (normal) corresponding supernatural power: Spores on the cultivator's head explode, leaving behind a poisonous cloud, which is released periodically.",
              'The Wood attribute "Strong" corresponds to the following ability: It generates spore caps and throws mushroom bombs at the player. This ability is triggered periodically.',
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Water attribute corresponding supernatural power" />
          <CDivider />
          <CList
            list={[
              `The corresponding supernatural power for the water attribute "weak" is: Attacks that inflict a freezing effect on cultivators.`,
              `Water attribute (normal) corresponding divine ability: The attack will create an icy ground at the cultivator's location.`,
              `The Water attribute "Strong" corresponds to the following divine ability: It generates ice and fire in all directions. This divine ability is triggered by a counter, that is, it is triggered once every 3 attacks.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Fire attribute corresponding supernatural power" />
          <CDivider />
          <CList
            list={[
              `Fire attribute "weak" corresponding supernatural power: If a normal attack hits a cultivator, it will cause an explosion and ignite the target.`,
              `Fire attribute (normal) corresponding supernatural power: When attacking, it generates fire and wind.`,
              `The Fire attribute "Strong" corresponds to the following divine ability: It creates three fire-based area-of-effect attacks. This divine ability is triggered by a counter, meaning it is triggered once every 3 attacks.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Metal element corresponds to supernatural powers" />
          <CDivider />
          <CList
            list={[
              `Metal element "weak" corresponding supernatural power: When attacking, fires a laser ball at the cultivator.`,
              `Metal Attribute (Normal) Corresponding Divine Ability: Releases two types of lasers in succession. This skill is triggered by a count, meaning it is triggered once every 3 attacks.`,
              `The Metal element ("Strong") corresponds to the following supernatural power: Summoning the Laser Eye and the Demonic Flame Eye. It disappears after charging at the cultivator three times consecutively.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="The corresponding supernatural power of the Primordial Attribute:" />
          <CDivider />
          <CList
            list={[
              `The corresponding supernatural power of the mixed attribute "weak" is: when attacking, release bone spike skills centered on the monster.`,
              `The corresponding supernatural power of the mixed-element attribute "normal" is: It will continuously spew out a large ball of black blood, which will splatter around and create large shadow tentacles.`,
              `The corresponding supernatural power of the mixed attribute "Strong" is: periodically summoning a shadow chariot, with two shadow bishops attacking the monk.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="The corresponding supernatural power of the Wuji attribute:" />
          <CDivider />
          <CList
            list={[
              `The corresponding supernatural power for the Wuji attribute "Weak": Attacks will stack hypnotic value on cultivators.`,
              `The corresponding divine ability for the Wuji attribute "Normal" is: Summons two moon spirit phantoms within a certain range to assist in battle.`,
              `The Wuji attribute "Strong" corresponds to the following supernatural power: It creates a circular area marked with blue particles. When a cultivator is within this area, phantoms and large phantoms will appear nearby and collide with the supernatural power. This supernatural power is triggered periodically.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="World Upgrade" />
          <CDivider />
          <CList
            list={[
              `When a player reaches the Nascent Soul stage, the world will upgrade. After the world upgrades, monster attacks and elemental tilts will deal additional divine sense damage, which can penetrate armor.`,
              `After the world is upgraded, some monsters will even possess a demonic spirit body, making them even more unfathomable.`,
              `At this time, players who have not yet reached the Core Formation stage have a chance to trigger Immortal Lord's assistance when they attack.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Demon Spirit Holy Body" />
          <CDivider />
          <CList
            list={[
              `When the world is upgraded, monsters will have a stronger primal tilt, and some creatures will possess several sacred bodies.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Demon Ancestor Reincarnation:" />
          <CDivider />
          <CList
            list={[
              `When its health drops below 30%, it will summon an armored bear badger to assist in battle. When its health drops below 25%, it will summon a crystal cyclops giant deer to assist in battle.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Innate Dao Body:" />
          <CDivider />
          <CList
            list={[
              `This monster will possess an additional hidden primal tilt.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Ancient Sacred Body:" />
          <CDivider />
          <CList
            list={[`Each attack is accompanied by a meteorite falling.`]}
          />
        </div>
        <div>
          <CSubtitle label="Blazing Sun Holy Body:" />
          <CDivider />
          <CList
            list={[
              `When its health drops below 30%, it will summon its avatar to aid in combat.`,
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Evil Yin Demon Body:" />
          <CDivider />
          <CList
            list={[
              `When its health drops below 50%, it will summon Shadow Knight, Shadow Chariot, and Shadow Bishop to assist in the battle.`,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
