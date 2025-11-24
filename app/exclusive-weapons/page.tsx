import { CDivider, CRecipe, CSubtitle, CTitle } from "@/components/common";

export default function ExclusiveWeapons() {
  return (
    <div className="space-y-14">
      <div className="space-y-10">
        <CTitle
          label="Ruyi Jingu Bang"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1727764220455_152_gfEddZX7YC.png"
        />

        <div>
          <CSubtitle label="Sun Wukong's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              It is a creature from the mountains and seas of the southeast,
              eight feet tall with only one tendon.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              For details, please see the Sun Wukong section of the Characters
              category.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 45 seconds</li>
            <li>Summon three identical clones to attack.</li>
            <li>
              One of these three clones will cast a root spell at the 8th and
              24th second mark, but the root duration is only half, and the
              shatter damage is 22.5.
            </li>
            <li>
              One of the three clones will cast a Lifeline spell at the 16th
              second, but the duration is only half, the damage is 2.3 per hit,
              and the healing effect is 3%.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="The fragrance of plum blossoms remains unchanged."
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1726322933732_152_dwqoKHMtZD.png"
        />

        <div>
          <CSubtitle label="Su Daji's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              Though fallen to the ground and crushed into dust, its fragrance
              remains unchanged.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              Teleport to the target location and generate
              will-o&apos;-the-wisp. When the damage ends, it will apply 0.8
              stacks of hypnosis and restore 3.3% of your health.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle
            label="Soul-Nourishing Jade"
            image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1726322883325_152_szwz4M3tY1.png"
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
          <ul className="list-disc pl-6 marker:text-xl mt-4">
            <li>
              When the durability of the Soul Nourishing Jade is less than 50%,
              it is in State 1; when the durability of the Soul Nourishing Jade
              is greater than or equal to 50%, it is in State 2.
            </li>
            <li>
              When in state one, there is no movement speed bonus or sanity
              bonus. When in state two, movement speed increases by 10%, sanity
              increases by 12 points/min, and the effects of divine abilities in
              each stage are enhanced.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Resurrection mechanism" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              When Su Daji possesses the Soul-Nourishing Jade Pendant and
              suffers a fatal attack, King Zhou&apos;s true form solidifies and
              emerges from the pendant. At this time, the player can control
              King Zhou to attack (or control him directly if he has already
              been summoned). King Zhou is immune to abnormal status effects and
              will not die; he also possesses a super armor effect and 95%
              damage reduction.
            </li>
            <li>
              At this point, players can unleash King Zhou&apos;s spiritual
              skills and supernatural powers.
            </li>
            <li>
              King Zhou&apos;s attacks inflict lifesteal equal to 5% of his
              maximum health. This lifesteal stops when his health reaches 100%.
            </li>
            <li>
              If the player controls King Zhou for 30 seconds and his health
              reaches 100%, Su Daji will regenerate his physical body. If his
              health does not reach 100%, Su Daji will die.
            </li>
            <li>
              Upon resurrection, the Soul-Nourishing Jade loses all durability
              and its special ability has a 75-second cooldown.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 180 seconds</li>
            <li>
              The supernatural power lasts for 120 seconds. Releasing the
              supernatural power will consume 15% of your health. Each stage of
              the supernatural power can be enhanced by the Soul Nourishing Jade
              in state two.
            </li>
            <li>
              When Su Daji's health is greater than 70% and less than or equal
              to 100%, when she releases her divine power, a surrounding fire
              attack will occur, and each fire attack will add 1.3 stacks of
              hypnosis value.
            </li>
            <li>
              When Su Daji's health is greater than 40% and less than or equal
              to 70%, she will summon King Zhou's Dharma Body to assist in the
              battle (requires having a Soul Nourishing Jade with more than 10%
              durability). Furthermore, when the player performs a coordinated
              attack with the Golden Body of Merit or the Supreme Demon Body,
              King Zhou's Dharma Body will also perform a coordinated attack.
            </li>
            <li>
              When Su Daji's health is below 40%, she will summon King Zhou
              himself to assist in the battle (requires a Soul-Nourishing Jade
              with more than 10% durability). When the player uses a Merit
              Golden Body or Supreme Demon Body in a coordinated attack, King
              Zhou's avatar will also perform a coordinated attack. When the
              player uses a Spirit Skill, King Zhou himself will also perform a
              coordinated attack.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Water Dragon Chant"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175192872_152_jOCBxuUIix.png"
        />

        <div>
          <CSubtitle label="Dragon Prince's Exclusive Magic Weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              His lofty ambitions, though buried deep, remain unchanged; once he
              gathers the winds and clouds, he will become emperor.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              When the Ice Aura is at the first level, teleport to the target
              location and splash water to cause area damage.
            </li>
            <li>
              When the Ice Aura is at the second level, teleport to the target
              location to release ice crystal ground and deal damage, freezing
              the target.
            </li>
            <li>
              When the Ice Aura is at the third level, teleporting to the target
              location creates a larger area of ​​ice crystal ground. It also
              continuously generates Ice Aura to freeze the target.
            </li>
            <li>
              When Ice Aura is at its fourth level, it applies the third level
              of Ice Aura's effect and grants the user an Ice Shield that
              absorbs one instance of damage. If the shield is destroyed, it
              applies two stacks of Freeze to the creature. This shield lasts
              for 4 seconds or disappears after being hit once, and it can stack
              with shields generated by special abilities.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 30 seconds</li>
            <li>
              When the Ice Aura is at the first level, it grants the user a buff
              that lasts for a certain period of time. Each normal attack that
              deals damage will generate a wave that pushes forward and deals
              damage.
            </li>
            <li>
              When the Ice Aura is at the second level, the attack range
              increases, and each attack will send a small ball of ice flame to
              the target location to cause damage.
            </li>
            <li>
              When the Ice Aura is at its third level, attack range increases,
              Ice Flame is enhanced, and it bounces between all creatures. It
              also grants itself a Frost Shield; creatures attacking it will be
              countered with two stacks of Frost, which can withstand two
              instances of damage and last for 15 seconds.
            </li>
            <li>
              When the Ice Aura is at the fourth level, in addition to the Ice
              Flame and Shield effects at the third level, hail will
              continuously fall around the monster. Each hailstone that hits a
              creature will add a freeze value to the creature.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Overview of Magical Items"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1714810059684_152_NcwlUgVK9c.png"
        />
        <div>
          <CSubtitle label="Base" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              Bound at birth: Your own innate magical artifact. Does not drop
              upon death.
            </li>
            <li>
              The magical artifact has 100% durability, starting at only 30%,
              and its durability is restored by consuming other weapons. When
              its durability is zero, it deals 10 damage.
            </li>
          </ul>
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
          <ul className="list-disc pl-6 marker:text-xl mt-4">
            <li>The newly crafted magic weapon has a durability of 0.</li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Hunyuan Axe"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175227884_152_EUWCBJjjkZ.png"
        />

        <div>
          <CSubtitle label="Woody's exclusive weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 87.5</li>
            <li>
              In the beginning of time, chaos and primordial chaos first
              appeared.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              The effect of throwing a ranged light axe towards the target point
              is that the light axe spins in the air, and both its flight path
              and return path will cause damage.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 60 seconds</li>
            <li>
              During the duration of the divine power, the weapon transforms,
              increasing the attack range. When attacking a target, the damage
              will bounce between up to 8 monsters, granting the user an
              additional 25% damage reduction (this damage reduction also
              applies to true damage from planes) and a 25% movement speed
              bonus.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Hibiscus Mystery Umbrella"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175280689_152_iMwhB5kIb9.png"
        />

        <div>
          <CSubtitle label="Wes's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              Under the mysterious umbrella, one finds peace and tranquility,
              stealing half a day of leisure from a busy life.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              An illusion identical to Wes appears, attacks three times, and
              then disappears.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 30 seconds</li>
            <li>
              After releasing the skill, you will immediately enter stealth
              mode. You cannot be targeted by any active action, but you will be
              affected by area damage. Taking damage or the player taking damage
              will break stealth mode (excluding the release of spirit skills).
            </li>
            <li>
              The stealth state lasts for half a day. Each time this skill is
              used to enter stealth, a buff lasting 10 seconds is granted. In
              this state, every two attacks will spray out a large amount of
              black blood, which will splatter on the ground around the target
              and transform into a shadow tentacle to assist in the attack.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Burning Annihilation"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175300003_152_STaw35oXxf.png"
        />

        <div>
          <CSubtitle label="Maxwell's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              The long zither's soul was severed, its blood staining the battle
              array, forging a burning silence that annihilated all living
              beings.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 15 seconds</li>
            <li>
              Summons 5 Woven Shadows, which explode when they approach the
              target. If the caster is within the blast radius, each exploding
              shadow restores a certain amount of health to the caster.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 90 seconds</li>
            <li>
              Summons two Shadow Bishops around the player to assist in attacks
              for a certain period of time.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Golden Scales"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175313515_152_n2juwb5DO8.png"
        />

        <div>
          <CSubtitle label="Wurt's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              Golden carp are not meant to stay in a pond; once they encounter
              wind and clouds, they transform into dragons.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              A jet of water splashes out from the player, simultaneously
              generating three waves that launch the player and have a knockback
              effect.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 60 seconds</li>
            <li>
              Summon two Murloc Guardians around the player to assist in
              attacks.
            </li>
            <li>
              Linked with Spirit Skills: When Walter uses a Spirit Skill, the
              two summoned Murloc Guardians will also use a Spirit Skill.
            </li>
            <li>
              The Murloc King's ability will grant Water an additional 66%
              damage reduction.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Red Dragon"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175327636_152_mutnpkrCKT.png"
        />

        <div>
          <CSubtitle label="Wigfrid's exclusive artifact" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              The red dragon soars ninety thousand miles, and one can enjoy the
              carefree life in the Jade Capital and Penglai.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              Jump towards the target point, causing damage and a ground slam to
              slow you down.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 60 seconds</li>
            <li>
              During the duration of the supernatural ability, the weapon in
              hand changes form and its attack range increases. Attacks create a
              whirlwind that pulls creatures towards its center. Weapon attacks
              are converted into area-of-effect damage, and each attack restores
              a certain amount of health.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Star Sword"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175342400_152_PK7Q9d0TdS.png"
        />

        <div>
          <CSubtitle label="WX-78's Exclusive Magic Item" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              The stars are shining brightly, the moon is shining white; would
              you like to drink a cup with me?
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              Release timed robots toward the target point; an explosion will be
              triggered when a creature approaches, or it will automatically
              explode after a certain time.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 60 seconds</li>
            <li>
              Continuously summons 3 bolts of lightning to attack itself and two
              other creatures within range. Each time it is hit by lightning, it
              takes no damage and recovers health. Each time it hits itself or
              the other two creatures, it deals area-of-effect damage to all
              targets except itself.
            </li>
            <li>
              Each time lightning strikes, it attempts to detonate all the timed
              robots on the field.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Thousand Tribulations Blade"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175342400_152_PK7Q9d0TdS.png"
        />

        <div>
          <CSubtitle label="Wanda's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              The vast sky stretches endlessly, and the Taiji (a concept in
              Chinese mythology) endures for countless eons.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              No release is required. When attacking, there is a chance to
              generate a time rift, during which several Wandas will land.
            </li>
            <li>
              The summoned Wanda can appear in the following ways: 1. She
              disappears after attacking a target while wielding an ice staff.
              2. She disappears after attacking a target while wielding a fire
              staff. 3. She disappears after attacking a target while wielding a
              weather vane. 4. She disappears after using a panpipe. 5. She
              disappears after using the Starcaller's Wand once. 6. She drops a
              random dish. 7. A Wanda wielding her signature weapon appears and
              casts a special ability on you: creating an invincibility shield,
              but its duration is shorter than Wanda's original ability.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 45 seconds</li>
            <li>
              While the skill is active, it grants the user an invincibility
              shield, and during the duration of this shield, each attack is
              converted into area-of-effect damage.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Qingyue"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175381347_152_w3BhhqZmuV.png"
        />

        <div>
          <CSubtitle label="Wanda's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              Wild geese soar through the dark sky, the sun and moon shine
              white, green maple leaves turn red, and frost falls from the sky.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds </li>
            <li>
              This ability causes the summoned robot to fire a laser ball at the
              target location. If the summoned robot does not exist, this
              ability cannot be used.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 120 seconds</li>
            <li>
              Summons a robot around the player to assist in attacks; clicking
              the "Divine Power" button again will recall it.
            </li>
            <li>
              When you use the dancing emoji, the bot will use the same emoji as
              you.
            </li>
            <li>
              The duration is infinite, and a cooldown period occurs upon recall
              or death.
            </li>
            <li>
              Health will continue to regenerate after a few seconds of being
              out of combat.
            </li>
            <li>
              When there are robots summoned by the divine power on the field,
              37% of the damage Winona receives is absorbed by the robots,
              including dimensional damage.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Endless Divine Sword"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715175398529_152_8EH8zKnBms.png"
        />

        <div>
          <CSubtitle label="Wormwood's Exclusive Magic Item" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              The wind will not cease until the fourth dhyana is reached, and
              the fire will not burn until the ninth chrysalis is achieved.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds </li>
            <li>
              Actively releasing thorns causes area damage and will synergize
              with divine abilities.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 30 seconds</li>
            <li>
              Summon 7 Birchnut Spirits around the player to attack the target.
            </li>
            <li>
              Meanwhile, fluorescent fruits and ferns will appear on the path
              you walk and slowly disappear, during which time your health will
              continuously recover.
            </li>
            <li>
              Releasing a spirit skill will also cause all birch chestnut
              spirits to continuously release spirit skills.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Come Out"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715698346330_152_z0oJaLM80Y.png"
        />

        <div>
          <CSubtitle label="Wolfgang's signature weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 86.5 + 1 point of planar damage</li>
            <li>
              One day I will reach the summit and dare to ask the heavens if
              they can compare.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              Passive skill: After every two attacks, the next third attack will
              cause dust to splash and deal splash damage.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 40 seconds</li>
            <li>
              Grants yourself a buff that lasts for a certain period of time.
              During the skill's duration, you gain an additional 60% damage
              reduction and cannot be interrupted during attacks. Additionally,
              every three attacks, the first attack will kick up dust, while the
              second and third attacks will kick up sand and gravel in a wider
              area in front of you, causing greater damage.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Gold-slicing Red Bone Knife"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1715699512165_152_YBbCRZX0a6.png"
        />

        <div>
          <CSubtitle label="Willow's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              The heroic spirit of heaven and earth remains awe-inspiring for a
              thousand autumns.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              Three fireballs are thrown at the target location, causing
              small-area damage.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 30 seconds</li>
            <li>
              Unleashes a wide-range, fan-shaped attack of blue ice and fire
              damage forward. While in this state, the user can still use spirit
              skills without interrupting attack animations. Furthermore, during
              this duration, the user gains an ice shield that, when attacked,
              stacks freeze layers on the target, blocking up to 3 instances of
              damage.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Apricot Blossoms in Light Rain"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1716380104055_152_ihqQf57gFb.png"
        />

        <div>
          <CSubtitle label="Wendy's exclusive weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              Apricot blossoms intoxicated by the light rain, old friends return
              on the Flower Festival.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              The petals spread out, causing area damage, and Abigail will also
              unleash this spirit skill at the same time.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 42 seconds</li>
            <li>
              Flowers continuously grow within a certain range, causing area
              damage, and can also activate Abigail's vulnerability status on
              the target.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Abigail Strengthening" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Abigail has 90% defense.</li>
            <li>Abigail has 20 points of planar defense.</li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Sword of Forgetfulness"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1716380719155_152_9jX7Xd1PYw.png"
        />

        <div>
          <CSubtitle label="Wortox's Exclusive Magic Item" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              The desolation begins when the vibrant red petals have all fallen;
              even those who try to forget their worries have not truly
              forgotten them.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              Passive skill: Each attack has a chance to create an illusion to
              aid in the attack, and also applies 1 stack of Frost and Burn to
              the target. When Burned, it will restore the player's health.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 30 seconds</li>
            <li>
              Red flowers continuously spawn around the cultivator. While
              dealing continuous damage, they also prematurely detonate soul
              fire, causing even greater damage, and simultaneously trigger the
              healing effect of spirit skills.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Sword of No Form"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1716381145043_152_RyTnkUbLqM.png"
        />

        <div>
          <CSubtitle label="Wilson's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              Even without form, there is form; all sentient beings can be
              saved.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              Using spiritual techniques when transforming into different mechs
              through supernatural powers will produce different effects.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 30 seconds</li>
            <li>
              You can transform into one of the following colored mechs: green,
              orange, purple, or blue. Transforming consumes one piece of
              currently equipped gear and reduces its durability by 100%, while
              inheriting its damage reduction. Regardless of the mech you
              transform into, you will gain an additional 25% base damage
              reduction and a glowing effect.
            </li>
            <li>
              Green Mech: In this state, each attack will emit area-of-effect
              spikes that deal damage.
            </li>
            <li>
              Spirit Skill: When released, it binds surrounding creatures and
              summons plants to attack the target.
            </li>
            <li>
              Blue Mech: In this state, each attack will stack a freeze layer on
              the enemy.
            </li>
            <li>
              Spiritual Skill: Emits icy spiritual energy around the user, which
              can damage enemies within range and stack freeze layers.
            </li>
            <li>
              Purple Mech: In this state, there is a chance to trigger a laser
              attack with each attack.
            </li>
            <li>Spiritual Skill: Unleash a wide-range laser attack.</li>
            <li>
              Red Mech: When attacking, there is a chance to trigger fire damage
              within the area.
            </li>
            <li>
              Skill: Slam a fireball at the target location to deal damage.
            </li>
            <li>
              Colored Mech: This mech has a low drop rate. It greatly enhances
              the cultivator's normal attacks and grants them complete
              invincibility. When attacked during this state, enemies will be
              instantly inflicted with sleep, freeze, and damage reflection.
              Furthermore, it summons shadow tentacles to assist in attacks.
            </li>
            <li>
              Spirit Skill: Teleports to the target location, causing a ground
              collapse, followed by a fire area-of-effect attack and an ice aura
              area-of-effect attack, dealing massive damage.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Ink Stain"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1716382623592_152_gBHiXFfZL9.png"
        />

        <div>
          <CSubtitle label="Wickerbottom's exclusive artifact" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              Like a fleeting glimpse of beauty in the mortal world, ink stains
              the stars and clouds.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              A bone array was created centered on the ancient Shadowweaver
              summoned by the divine power.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 90 seconds</li>
            <li>
              Summon the ancient Shadowweaver to assist the cultivator in
              battle.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Reverse Dart"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1716382861283_152_wo76LIiLIf.png"
        />

        <div>
          <CSubtitle label="Webber's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              Of all the celestial beings, none is more noble than the Azure
              Dragon, which is invincible.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 30 seconds</li>
            <li>
              Summon 3 cave spiders wearing thulium headgear to assist the
              player in attacking.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 90 seconds</li>
            <li>
              The Spider Queen's spirit is summoned to assist the player in
              attacks. She will also summon cave spiders and broken spiders to
              aid in the battle.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Dragon Soul Asking Hammer"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1716383583938_152_bkDqKNWW0w.png"
        />

        <div>
          <CSubtitle label="Wally's Exclusive Magic Weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              For thousands of years, battles have raged; the Dragon Soul seeks
              enlightenment in a single thought.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              Causes fire damage within a certain range around the cultivator.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 45 seconds</li>
            <li>
              Grants the user a buff, and triggers fire and wind damage on two
              separate attacks. Teammates will also receive this effect.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Heavenly Hunt Devouring Spear"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1716383886391_152_XeUdvExbiB.png"
        />

        <div>
          <CSubtitle label="Walter's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>Devouring spirits and hunting demons, they are invincible.</li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 12 seconds</li>
            <li>
              Release a shadow mark on the target, after which a shadow frost
              shark will leap toward the target to attack.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 30 seconds</li>
            <li>
              Gain a continuous buff effect; attacks will bounce between
              creatures, and there is a chance to summon two Shadow Walruses or
              Shadow Clones to attack the target when attacking.
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-dashed" />
      <div className="space-y-10">
        <CTitle
          label="Golden Cudgel"
          image="http://39.107.158.116/api/image?type=general&sectionId=24&name=1716384511956_152_uEKv4ZnNQ0.png"
        />

        <div>
          <CSubtitle label="Monkey's exclusive magic weapon" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Attack power: 100</li>
            <li>
              It sweeps away all injustices in the world and dispels all sorrows
              throughout history.
            </li>
            <li>
              The configuration interface allows you to choose whether to enable
              the Wuhou character.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Spiritual Skills" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 15 seconds</li>
            <li>Summon three golden clones to attack the target.</li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Supernatural powers" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>Cooldown: 45 seconds</li>
            <li>
              Summon two golden first mates to assist the player in battle, and
              each attack will restore the player's health. After a short
              interval, summon three pirate monkeys to provide additional
              support in the battle.
            </li>
          </ul>
        </div>
        <div>
          <CSubtitle label="Change" />
          <CDivider />
          <ul className="list-disc pl-6 marker:text-xl">
            <li>
              The monkey can transform by holding down the Alt key and clicking
              on a target while empty-handed, providing a degree of concealment
              so that it will not be detected by monsters.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
