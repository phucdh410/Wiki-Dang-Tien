import {
  CDivider,
  CList,
  CRecipe,
  CSubtitle,
  CTitle,
} from "@/components/common";

export default function ExclusiveWeapons() {
  return (
    <div className="space-y-14">
      <div className="space-y-10">
        <CTitle label="Ruyi Jingu Bang" image="/weapons/weapon-1.png" />

        <div>
          <CSubtitle label="Sun Wukong's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "It is a creature from the mountains and seas of the southeast, eight feet tall with only one tendon.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "For details, please see the Sun Wukong section of the Characters category.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 45 seconds",
              "Summon three identical clones to attack.",
              "One of these three clones will cast a root spell at the 8th and 24th second mark, but the root duration is only half, and the shatter damage is 22.5.",
              "One of the three clones will cast a Lifeline spell at the 16th second, but the duration is only half, the damage is 2.3 per hit, and the healing effect is 3%.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="The fragrance of plum blossoms remains unchanged."
          image="/weapons/weapon-2.png"
        />

        <div>
          <CSubtitle label="Su Daji's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Though fallen to the ground and crushed into dust, its fragrance remains unchanged.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "Teleport to the target location and generate will-o'-the-wisp. When the damage ends, it will apply 0.8 stacks of hypnosis and restore 3.3% of your health.",
            ]}
          />
        </div>
        <div>
          <CSubtitle
            label="Soul-Nourishing Jade"
            image="/weapons/weapon-3.png"
          />
          <CDivider />
          <CRecipe
            ingredients={[
              {
                name: "Rope",
                quantity: 1,
                image: "https://dontstarve.wiki.gg/images/Rope.png",
              },
              {
                name: "Gold Nugget",
                quantity: 3,
                image: "https://dontstarve.wiki.gg/images/Gold_Nugget.png",
              },
              {
                name: "Red Gem",
                quantity: 3,
                image: "https://dontstarve.wiki.gg/images/Red_Gem.png",
              },
              {
                name: "Medium-grade Spirit Stone",
                quantity: 3,
                image: "/medium-grade-stone.png",
              },
            ]}
          />
          <CList
            className="mt-4"
            list={[
              "When the durability of the Soul Nourishing Jade is less than 50%, it is in State 1; when the durability of the Soul Nourishing Jade is greater than or equal to 50%, it is in State 2.",
              "When in state one, there is no movement speed bonus or sanity bonus. When in state two, movement speed increases by 10%, sanity increases by 12 points/min, and the effects of divine abilities in each stage are enhanced.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Resurrection mechanism" />
          <CDivider />
          <CList
            list={[
              "When Su Daji possesses the Soul-Nourishing Jade Pendant and suffers a fatal attack, King Zhou's true form solidifies and emerges from the pendant. At this time, the player can control King Zhou to attack (or control him directly if he has already been summoned). King Zhou is immune to abnormal status effects and will not die; he also possesses a super armor effect and 95% damage reduction.",
              "At this point, players can unleash King Zhou's spiritual skills and supernatural powers.",
              "King Zhou's attacks inflict lifesteal equal to 5% of his maximum health. This lifesteal stops when his health reaches 100%.",
              "If the player controls King Zhou for 30 seconds and his health reaches 100%, Su Daji will regenerate his physical body. If his health does not reach 100%, Su Daji will die.",
              "Upon resurrection, the Soul-Nourishing Jade loses all durability and its special ability has a 75-second cooldown.",
            ]}
          />
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 180 seconds",
              "The supernatural power lasts for 120 seconds. Releasing the supernatural power will consume 15% of your health. Each stage of the supernatural power can be enhanced by the Soul Nourishing Jade in state two.",
              "When Su Daji's health is greater than 70% and less than or equal to 100%, when she releases her divine power, a surrounding fire attack will occur, and each fire attack will add 1.3 stacks of hypnosis value.",
              "When Su Daji's health is greater than 40% and less than or equal to 70%, she will summon King Zhou's Dharma Body to assist in the battle (requires having a Soul Nourishing Jade with more than 10% durability). Furthermore, when the player performs a coordinated attack with the Golden Body of Merit or the Supreme Demon Body, King Zhou's Dharma Body will also perform a coordinated attack.",
              "When Su Daji's health is below 40%, she will summon King Zhou himself to assist in the battle (requires a Soul-Nourishing Jade with more than 10% durability). When the player uses a Merit Golden Body or Supreme Demon Body in a coordinated attack, King Zhou's avatar will also perform a coordinated attack. When the player uses a Spirit Skill, King Zhou himself will also perform a coordinated attack.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Water Dragon Chant" image="/weapons/weapon-4.png" />

        <div>
          <CSubtitle label="Dragon Prince's Exclusive Magic Weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "His lofty ambitions, though buried deep, remain unchanged; once he gathers the winds and clouds, he will become emperor.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "When the Ice Aura is at the first level, teleport to the target location and splash water to cause area damage.",
              "When the Ice Aura is at the second level, teleport to the target location to release ice crystal ground and deal damage, freezing the target.",
              "When the Ice Aura is at the third level, teleporting to the target location creates a larger area of ​​ice crystal ground. It also continuously generates Ice Aura to freeze the target.",
              "When Ice Aura is at its fourth level, it applies the third level of Ice Aura's effect and grants the user an Ice Shield that absorbs one instance of damage. If the shield is destroyed, it applies two stacks of Freeze to the creature. This shield lasts for 4 seconds or disappears after being hit once, and it can stack with shields generated by special abilities.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 30 seconds",
              "When the Ice Aura is at the first level, it grants the user a buff that lasts for a certain period of time. Each normal attack that deals damage will generate a wave that pushes forward and deals damage.",
              "When the Ice Aura is at the second level, the attack range increases, and each attack will send a small ball of ice flame to the target location to cause damage.",
              "When the Ice Aura is at its third level, attack range increases, Ice Flame is enhanced, and it bounces between all creatures. It also grants itself a Frost Shield; creatures attacking it will be countered with two stacks of Frost, which can withstand two instances of damage and last for 15 seconds.",
              "When the Ice Aura is at the fourth level, in addition to the Ice Flame and Shield effects at the third level, hail will continuously fall around the monster. Each hailstone that hits a creature will add a freeze value to the creature.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Overview of Magical Items"
          image="/weapons/overview.png"
        />

        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <CList
            list={[
              "Bound at birth: Your own innate magical artifact. Does not drop upon death.",
              "The magical artifact has 100% durability, starting at only 30%, and its durability is restored by consuming other weapons. When its durability is zero, it deals 10 damage.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Lost can be refined" />
          <CDivider />
          <CRecipe
            ingredients={[
              {
                name: "Bone Shards",
                quantity: 1,
                image: "https://dontstarve.wiki.gg/images/Bone_Shards.png",
              },
              {
                name: "Living Log",
                quantity: 3,
                image: "https://dontstarve.wiki.gg/images/Living_Log.png",
              },
              {
                name: "Red Gem",
                quantity: 5,
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
            list={["The newly crafted magic weapon has a durability of 0."]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Hunyuan Axe" image="/weapons/weapon-5.png" />

        <div>
          <CSubtitle label="Woody's exclusive weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 87.5",
              "In the beginning of time, chaos and primordial chaos first appeared.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "The effect of throwing a ranged light axe towards the target point is that the light axe spins in the air, and both its flight path and return path will cause damage.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 60 seconds",
              "During the duration of the divine power, the weapon transforms, increasing the attack range. When attacking a target, the damage will bounce between up to 8 monsters, granting the user an additional 25% damage reduction (this damage reduction also applies to true damage from planes) and a 25% movement speed bonus.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Hibiscus Mystery Umbrella"
          image="/weapons/weapon-6.png"
        />

        <div>
          <CSubtitle label="Wes's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Under the mysterious umbrella, one finds peace and tranquility, stealing half a day of leisure from a busy life.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "An illusion identical to Wes appears, attacks three times, and then disappears.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 30 seconds",
              "After releasing the skill, you will immediately enter stealth mode. You cannot be targeted by any active action, but you will be affected by area damage. Taking damage or the player taking damage will break stealth mode (excluding the release of spirit skills).",
              "The stealth state lasts for half a day. Each time this skill is used to enter stealth, a buff lasting 10 seconds is granted. In this state, every two attacks will spray out a large amount of black blood, which will splatter on the ground around the target and transform into a shadow tentacle to assist in the attack.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Burning Annihilation" image="/weapons/weapon-7.png" />

        <div>
          <CSubtitle label="Maxwell's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "The long zither's soul was severed, its blood staining the battle array, forging a burning silence that annihilated all living beings.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 15 seconds",
              "Summons 5 Woven Shadows, which explode when they approach the target. If the caster is within the blast radius, each exploding shadow restores a certain amount of health to the caster.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 90 seconds",
              "Summons two Shadow Bishops around the player to assist in attacks for a certain period of time.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Golden Scales" image="/weapons/weapon-8.png" />

        <div>
          <CSubtitle label="Wurt's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Golden carp are not meant to stay in a pond; once they encounter wind and clouds, they transform into dragons.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "A jet of water splashes out from the player, simultaneously generating three waves that launch the player and have a knockback effect.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 60 seconds",
              "Summon two Murloc Guardians around the player to assist in attacks.",
              "Linked with Spirit Skills: When Walter uses a Spirit Skill, the two summoned Murloc Guardians will also use a Spirit Skill.",
              "The Murloc King's ability will grant Water an additional 66% damage reduction.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Red Dragon" image="/weapons/weapon-9.png" />

        <div>
          <CSubtitle label="Wigfrid's exclusive artifact" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "The red dragon soars ninety thousand miles, and one can enjoy the carefree life in the Jade Capital and Penglai.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "Jump towards the target point, causing damage and a ground slam to slow you down.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 60 seconds",
              "During the duration of the supernatural ability, the weapon in hand changes form and its attack range increases. Attacks create a whirlwind that pulls creatures towards its center. Weapon attacks are converted into area-of-effect damage, and each attack restores a certain amount of health.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Star Sword" image="/weapons/weapon-10.png" />

        <div>
          <CSubtitle label="WX-78's Exclusive Magic Item" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "The stars are shining brightly, the moon is shining white; would you like to drink a cup with me?",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "Release timed robots toward the target point; an explosion will be triggered when a creature approaches, or it will automatically explode after a certain time.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 60 seconds",
              "Continuously summons 3 bolts of lightning to attack itself and two other creatures within range. Each time it is hit by lightning, it takes no damage and recovers health. Each time it hits itself or the other two creatures, it deals area-of-effect damage to all targets except itself.",
              "Each time lightning strikes, it attempts to detonate all the timed robots on the field.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Thousand Tribulations Blade"
          image="/weapons/weapon-11.png"
        />

        <div>
          <CSubtitle label="Wanda's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "The vast sky stretches endlessly, and the Taiji (a concept in Chinese mythology) endures for countless eons.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "No release is required. When attacking, there is a chance to generate a time rift, during which several Wandas will land.",
              "The summoned Wanda can appear in the following ways: 1. She disappears after attacking a target while wielding an ice staff. 2. She disappears after attacking a target while wielding a fire staff. 3. She disappears after attacking a target while wielding a weather vane. 4. She disappears after using a panpipe. 5. She disappears after using the Starcaller's Wand once. 6. She drops a random dish. 7. A Wanda wielding her signature weapon appears and casts a special ability on you: creating an invincibility shield, but its duration is shorter than Wanda's original ability.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 45 seconds",
              "While the skill is active, it grants the user an invincibility shield, and during the duration of this shield, each attack is converted into area-of-effect damage.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Qingyue" image="/weapons/weapon-12.png" />

        <div>
          <CSubtitle label="Wanda's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Wild geese soar through the dark sky, the sun and moon shine white, green maple leaves turn red, and frost falls from the sky.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "This ability causes the summoned robot to fire a laser ball at the target location. If the summoned robot does not exist, this ability cannot be used.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 120 seconds",
              "Summons a robot around the player to assist in attacks; clicking the 'Divine Power' button again will recall it.",
              "When you use the dancing emoji, the bot will use the same emoji as you.",
              "The duration is infinite, and a cooldown period occurs upon recall or death.",
              "Health will continue to regenerate after a few seconds of being out of combat.",
              "When there are robots summoned by the divine power on the field, 37% of the damage Winona receives is absorbed by the robots, including dimensional damage.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Endless Divine Sword" image="/weapons/weapon-13.png" />

        <div>
          <CSubtitle label="Wormwood's Exclusive Magic Item" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "The wind will not cease until the fourth dhyana is reached, and the fire will not burn until the ninth chrysalis is achieved.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "Actively releasing thorns causes area damage and will synergize with divine abilities.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 30 seconds",
              "Summon 7 Birchnut Spirits around the player to attack the target.",
              "Meanwhile, fluorescent fruits and ferns will appear on the path you walk and slowly disappear, during which time your health will continuously recover.",
              "Releasing a spirit skill will also cause all birch chestnut spirits to continuously release spirit skills.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Come Out" image="/weapons/weapon-14.png" />

        <div>
          <CSubtitle label="Wolfgang's signature weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 86.5 + 1 point of planar damage",
              "One day I will reach the summit and dare to ask the heavens if they can compare.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Passive skill: After every two attacks, the next third attack will cause dust to splash and deal splash damage.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 40 seconds",
              "Grants yourself a buff that lasts for a certain period of time. During the skill's duration, you gain an additional 60% damage reduction and cannot be interrupted during attacks. Additionally, every three attacks, the first attack will kick up dust, while the second and third attacks will kick up sand and gravel in a wider area in front of you, causing greater damage.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Gold-slicing Red Bone Knife"
          image="/weapons/weapon-15.png"
        />

        <div>
          <CSubtitle label="Willow's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "The heroic spirit of heaven and earth remains awe-inspiring for a thousand autumns.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "Three fireballs are thrown at the target location, causing small-area damage.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 30 seconds",
              "Unleashes a wide-range, fan-shaped attack of blue ice and fire damage forward. While in this state, the user can still use spirit skills without interrupting attack animations. Furthermore, during this duration, the user gains an ice shield that, when attacked, stacks freeze layers on the target, blocking up to 3 instances of damage.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Apricot Blossoms in Light Rain"
          image="/weapons/weapon-16.png"
        />

        <div>
          <CSubtitle label="Wendy's exclusive weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Apricot blossoms intoxicated by the light rain, old friends return on the Flower Festival.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "The petals spread out, causing area damage, and Abigail will also unleash this spirit skill at the same time.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 42 seconds",
              "Flowers continuously grow within a certain range, causing area damage, and can also activate Abigail's vulnerability status on the target.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Abigail Strengthening" />
          <CDivider />
          <CList
            list={[
              "Abigail has 90% defense.",
              "Abigail has 20 points of planar defense.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Sword of Forgetfulness" image="/weapons/weapon-17.png" />

        <div>
          <CSubtitle label="Wortox's Exclusive Magic Item" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "The desolation begins when the vibrant red petals have all fallen; even those who try to forget their worries have not truly forgotten them.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Passive skill: Each attack has a chance to create an illusion to aid in the attack, and also applies 1 stack of Frost and Burn to the target. When Burned, it will restore the player's health.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 30 seconds",
              "Red flowers continuously spawn around the cultivator. While dealing continuous damage, they also prematurely detonate soul fire, causing even greater damage, and simultaneously trigger the healing effect of spirit skills.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Sword of No Form" image="/weapons/weapon-18.png" />

        <div>
          <CSubtitle label="Wilson's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Even without form, there is form; all sentient beings can be saved.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "Using spiritual techniques when transforming into different mechs through supernatural powers will produce different effects.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 30 seconds",
              "You can transform into one of the following colored mechs: green, orange, purple, or blue. Transforming consumes one piece of currently equipped gear and reduces its durability by 100%, while inheriting its damage reduction. Regardless of the mech you transform into, you will gain an additional 25% base damage reduction and a glowing effect.",
              "Green Mech: In this state, each attack will emit area-of-effect spikes that deal damage.",
              "Spirit Skill: When released, it binds surrounding creatures and summons plants to attack the target.",
              "Blue Mech: In this state, each attack will stack a freeze layer on the enemy.",
              "Spiritual Skill: Emits icy spiritual energy around the user, which can damage enemies within range and stack freeze layers.",
              "Purple Mech: In this state, there is a chance to trigger a laser attack with each attack.",
              "Spiritual Skill: Unleash a wide-range laser attack.",
              "Red Mech: When attacking, there is a chance to trigger fire damage within the area.",
              "Skill: Slam a fireball at the target location to deal damage.",
              "Colored Mech: This mech has a low drop rate. It greatly enhances the cultivator's normal attacks and grants them complete invincibility. When attacked during this state, enemies will be instantly inflicted with sleep, freeze, and damage reflection. Furthermore, it summons shadow tentacles to assist in attacks.",
              "Spirit Skill: Teleports to the target location, causing a ground collapse, followed by a fire area-of-effect attack and an ice aura area-of-effect attack, dealing massive damage.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Ink Stain" image="/weapons/weapon-19.png" />

        <div>
          <CSubtitle label="Wickerbottom's exclusive artifact" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Like a fleeting glimpse of beauty in the mortal world, ink stains the stars and clouds.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "A bone array was created centered on the ancient Shadowweaver summoned by the divine power.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 90 seconds",
              "Summon the ancient Shadowweaver to assist the cultivator in battle.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Reverse Dart" image="/weapons/weapon-20.png" />

        <div>
          <CSubtitle label="Webber's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Of all the celestial beings, none is more noble than the Azure Dragon, which is invincible.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 30 seconds",
              "Summon 3 cave spiders wearing thulium headgear to assist the player in attacking.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 90 seconds",
              "The Spider Queen's spirit is summoned to assist the player in attacks. She will also summon cave spiders and broken spiders to aid in the battle.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Dragon Soul Asking Hammer"
          image="/weapons/weapon-21.png"
        />

        <div>
          <CSubtitle label="Wally's Exclusive Magic Weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "For thousands of years, battles have raged; the Dragon Soul seeks enlightenment in a single thought.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "Causes fire damage within a certain range around the cultivator.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 45 seconds",
              "Grants the user a buff, and triggers fire and wind damage on two separate attacks. Teammates will also receive this effect.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle
          label="Heavenly Hunt Devouring Spear"
          image="/weapons/weapon-22.png"
        />

        <div>
          <CSubtitle label="Walter's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "Devouring spirits and hunting demons, they are invincible.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 12 seconds",
              "Release a shadow mark on the target, after which a shadow frost shark will leap toward the target to attack.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 30 seconds",
              "Gain a continuous buff effect; attacks will bounce between creatures, and there is a chance to summon two Shadow Walruses or Shadow Clones to attack the target when attacking.",
            ]}
          />
        </div>
      </div>

      <hr className="border-dashed" />

      <div className="space-y-10">
        <CTitle label="Golden Cudgel" image="/weapons/weapon-23.png" />

        <div>
          <CSubtitle label="Monkey's exclusive magic weapon" />
          <CDivider />
          <CList
            list={[
              "Attack power: 100",
              "It sweeps away all injustices in the world and dispels all sorrows throughout history.",
              "The configuration interface allows you to choose whether to enable the Wuhou character.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 15 seconds",
              "Summon three golden clones to attack the target.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <CList
            list={[
              "Cooldown: 45 seconds",
              "Summon two golden first mates to assist the player in battle, and each attack will restore the player's health. After a short interval, summon three pirate monkeys to provide additional support in the battle.",
            ]}
          />
        </div>

        <div>
          <CSubtitle label="Change" />
          <CDivider />
          <CList
            list={[
              "The monkey can transform by holding down the Alt key and clicking on a target while empty-handed, providing a degree of concealment so that it will not be detected by monsters.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
