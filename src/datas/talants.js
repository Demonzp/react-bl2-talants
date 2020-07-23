export default class Talants{
    static GUNZERKER = {
        mainTalant:{
            name:"Шизострельба",
            discription:"Активный навык. Позволяет стрелять из двух орудий одновременно в течение определённого времени после активации. После включения Сальвадор восстанавливает половину здоровья, получает устойчивость к повреждениям и получает регенерацию здоровья и боеприпасов. Ракеты Не востанавливаються. Перезарядка: 42 секунды"
        },

        tree:{
        Gunlust:[
            [
                {
                    num:0,
                    //name: "Locked And Loaded",
                    name: "К Стрельбе Готов",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        fireRate:5
                    },
                    //discription:"Reloading your gun gives you +{fireRate}% Fire Rate per level for a short time."
                    discription:"После перезарядки +{fireRate}% Скорость Стрельбы ненадолго повышаеться"
                },
                {},
                {
                    num:1,
                    //name: "Quick Draw",
                    name: "Быстрый Стрелок",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        weaponSwapSpeed:7,
                        critHitDamage:2
                    },
                    //discription:"+{weaponSwapSpeed}% Weapon Swap Speed and +{critHitDamage}% Critical Hit Damage per level."
                    discription:"+{weaponSwapSpeed}% Скорость Смены Оружия и +{critHitDamage}% Критический Урон."
                }
            ],
            [
                {
                    num:2,
                    //name: "I'm Your Huckleberry",
                    name: "Я твой Гекльберри",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        damageAndReloadSpeed:3
                    },
                    //discription:"+{damageAndReloadSpeed}% Damage and Reload Speed per level with pistols."
                    discription:"+{damageAndReloadSpeed}% Урон и Скорость Перезарядки при использовании пистолета."
                },
                {},
                {
                    num:3,
                    //name: "All I Need is One",
                    name: "Нужно только одно",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        damage:8
                    },
                    //discription:"Swapping weapons causes your next shot fired to deal +{damage}% damage per level."
                    discription:"Следующий после смены оружия выстрел нанесет дополнительно +{damage}% Урон."
                }
            ],
            [
                {
                    num:4,
                    //name: "Divergent Likeness",
                    name: "Другой облик",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        damage:6,
                        accuracy:6
                    },
                    //discription:"+{damage}% Damage when Gunzerking with two of the same type of guns. +{accuracy}% Accuracy when Gunzerking with two different types of guns."
                    discription:"При Стрельбе С Двух Рук из оружия одного типа повышаеться +{damage}% Урон. Из оружия разных типов повышаеться повышаеться +{accuracy}% Точность."
                },
                {
                    num:5,
                    //name: "Auto-Loader",
                    name: "Автоперезарядка",
                    lvl:0,
                    maxLvl:1,
                    calc:{
                        damage:8
                    },
                    //discription:"Killing an enemy Instantly Reloads all of the guns that you have equipped that are not currently in your hands. Swapping guns after Auto-Loader has reloaded a gun triggers Locked &amp; Loaded.",
                    discription:"После уничтожения врага, все оружие, за исключением того, что вы держите в руках, немедленно перезаряжается. Если после этого взять в руки другое оружие, немедленно активируется навык 'К Стрельбе Готов'."
                },
                {
                    num:6,
                    //name: "Money Shot",
                    name: "В Яблочко",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        damageMagazinSize:8,
                        damage:80
                    },
                    //discription:"The last bullet fired from any gun does +{damageMagazinSize}% damage per level per magazine size, up to +{damage}% damage per level.",
                    discription:"Последний патрон в магазине нанесет +{damage}% Урон и еще +{damageMagazinSize}% Урон от размера магазина."
                }
            ],
            [
                {
                    num:7,
                    //name: "Lay Waste",
                    name: "Разорение",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        fireRate:8,
                        critHitDamage:5
                    },
                    //discription:"Kill Skill. Killing an enemy gives +{fireRate}% Fire Rate and +{critHitDamage}% Critical Hit Damage with Guns per level for a short time.",
                    discription:"Навык убийства. Уничтожение врага повышает +{fireRate}% скорострельность и +{critHitDamage}% Критический Урон при стрельбе из любого вида оружия."
                },
                {
                    num:8,
                    //name: "Down Not Out",
                    name: "Непобежденный",
                    lvl:0,
                    maxLvl:1,
                    calc:{},
                    //discription:"You can Gunzerk while in Fight for Your Life.",
                    discription:"Вы можете одновременно использовать навыки 'Борьба За Жизнь' и 'Стрельба с Двух Рук'."
                },
                {}
            ],
            [
                {},
                {
                    num:9,
                    //name: "Keep It Piping Hot",
                    name: "Не Снижая Обороты",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        gunDamage:5,
                        meleeDamage:6,
                        grenadeDamage:5
                    },
                    //discription:"While Gunzerking is in the process of cooling down you gain +{gunDamage}% Gun Damage, +{meleeDamage}% Melee Damage, and +{grenadeDamage}% Grenade Damage per level.",
                    discription:"Пока идет перезарядка навыка 'Стрельба с двух рук', вы наносите больше +{gunDamage}% Урона при Стрельбе и +{meleeDamage}% Урона в Ближнем Бою. Ваши гранаты также наносят больше +{grenadeDamage}% Урона."
                },
                {}
            ],
            [
                {},
                {
                    num:10,
                    //name: "No Kill Like Overkill",
                    name: "Убийство с Запасом",
                    lvl:0,
                    maxLvl:1,
                    calc:{
                    },
                    //discription:"Any excess damage dealt to an enemy that kills them is transferred to the next enemy fired at.",
                    discription:"Убивая врага, вы повышаете Урон при Стрельбе на величину избыточного урона, который вы только что нанесли."
                },
                {}
            ]
        ],
        Rampage:[
            [
                {
                    num:0,
                    //name: "Inconceivable",
                    name: "Невероятность",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        chance:10
                    },
                    discription:"+{chance}% chance per level for shots not to consume ammo depending on how low your health and shields are.",
                    discription:"С +{chance}% шансом при стрельбе вы не тратите боеприпасы. Чем ниже уровень здоровья и щитов, тем выше вероятность экономии боеприпасов."
                },
                {},
                {
                    num:1,
                    //name: "Filled to the Brim",
                    name: "До Краев",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        magazineCapacity:5,
                        ammunitionCapacity:3
                    },
                    //discription:"+{magazineCapacity}% Magazine Capacity and +{ammunitionCapacity}% Ammunition Capacity per level for all weapon types.",
                    discription:"+{magazineCapacity}% Емкасть Магазина и +{ammunitionCapacity}% Количество Боеприпасов которое вы можете нести."
                }
            ],
            [
                {
                    num:2,
                    //name: "All in the Reflexes",
                    name: "Главное Рефлексы",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        reloadSpeed:5,
                        meleeDamage:4
                    },
                    //discription:"+{reloadSpeed}% Reload Speed and +{meleeDamage}% Melee Damage per level.",
                    discription:"Повышает +{reloadSpeed}% Скорость Перезарядки и +{meleeDamage}% Урон в Ближнем бою."
                },
                {},
                {
                    num:3,
                    //name: "Last Longer",
                    name: "Повышенная Живучесть",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        secDuration:3
                    },
                    //discription:"+{secDuration}% seconds Gunzerking duration per level.",
                    discription:"Повышает +{secDuration}% время действия навыка 'Стрельба с двух рук'."
                }
            ],
            [
                {
                    num:4,
                    //name: "I'm Ready Already",
                    name: "Я Уже готов",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        cooldownRate:5
                    },
                    //discription:"+{cooldownRate}% Gunzerking Cooldown Rate.",
                    discription:"+{cooldownRate}% Ускоряет восстановление навыка 'Стрельба с двух рук'."
                },
                {
                    num:5,
                    //name: "Steady as She Goes",
                    name: "Так Держать",
                    lvl:0,
                    maxLvl:1,
                    calc:{
                        recoilReduction:80,
                        chance:30
                    },
                    //discription:"+{recoilReduction}% Recoil Reduction and +{chance}% chance to improve Accuracy on hit when Gunzerking.",
                    discription:"Пока действует навык 'Стрельба с двух рук', уменьшается +{recoilReduction}% Отдача. Кроме того, каждый удачный выстрел имеет +{chance}% Шанс повысить Точность Стрельбы."
                },
                {
                    num:6,
                    //name: "5 Shots or 6",
                    name: "5 Или 6 Выстрелов",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        chance:5
                    },
                    //discription:"Grants a +{chance}% chance per level to add an extra round of ammunition when firing instead of expending ammunition.",
                    discription:"Навык убийства. При уничтожении врага возникает +{chance}% вероятность увеличения Боезапаса."
                }
            ],
            [
                {
                    num:7,
                    //name: "Yippie Ki Yay",
                    name: "Йиппи-кай-эй!",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        duration:0.6
                    },
                    //discription:"Increases the duration of Gunzerking by +{duration} seconds per level every time an enemy is killed while Gunzerking.",
                    discription:"Уничтожая врага, пока действует навык 'Стрельба с двух рук', вы повышаете +{duration} время действия навыка."
                },
                {
                    num:8,
                    //name: "Double Your Fun",
                    name: "Двойное Удовольствие",
                    lvl:0,
                    maxLvl:1,
                    calc:{
                    },
                    //discription:"Throwing a grenade while Gunzerking throws two grenades instead of one. The second grenade doesn't cost ammo.",
                    discription:"Если действует навык 'Стрельба с двух рук', то вместо одной гранаты вы бросаете 2. Боезапас при этом уменьшается только на одну гранату."
                },
                {

                }
            ],
            [
                {
          
                },
                {
                    num:9,
                    //name: "Get Some",
                    name: "Получай!",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        cooldown:0.6
                    },
                    //discription:"Shooting an enemy decreases Gunzerking cooldown by -{cooldown} seconds per level. Has a cooldown of 3 seconds.",
                    discription:"Каждое попадание ускоряет -{cooldown} восстановление навыка 'Стрельба с Двух Рук'. Не чаще, чем раз в 3 секунды."
                },
                {

                }
            ],
            [
                {
          
                },
                {
                    num:10,
                    //name: "Keep Firing",
                    name: "Стреляй Дальше",
                    lvl:0,
                    maxLvl:1,
                    calc:{
                        fireRate:88,
                        reloadSpeed:25
                    },
                    //discription:"While Gunzerking, you gain up to +{fireRate}% Fire Rate and +{reloadSpeed}% Reload Speed depending on how long you hold down the trigger.",
                    discription:"Пока действует навык 'Стрельба с Двух Рук', чем дольше вы жмете на спусковой крючок, тем выше +{fireRate}% скорострельность и +{reloadSpeed}% скорость перезарядки."
                },
                {

                }
            ]
        ],
        Brawn:[
            [
                {
                    num:0,
                    //name: "Hard to Kill",
                    name: "Живучесть",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        maxHealth:4,
                        regenerate:0.1
                    },
                    //discription:"+{maxHealth}% Maximum Health and +{regenerate}% regenerate of your Maximum Health per second per level.",
                    discription:"Повышает +{maxHealth}% максимальный уровень Здоровья и дает +{regenerate}% восстановление здоровья."
                },
                {},
                {
                    num:1,
                    //name: "Incite",
                    name:"Поджигатель",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        movementSpeed:6,
                        reloadSpeed:5
                    },
                    //discription:"Taking damage gives +{movementSpeed}% Movement Speed and +{reloadSpeed}% Reload Speed per level for a few seconds.",
                    discription:"Получаемый урон на несколько секунд повышает вашу +{movementSpeed}% скорость и +{reloadSpeed}% скорость перезарядки."
                }
            ],
            [
                {
                    num:2,
                    //name: "Asbestos",
                    name: "Асбест",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        effectDuration:8,
                    },
                    //discription:"-{effectDuration}% Negative Status Effect Duration per level.",
                    discription:"Снижает -{effectDuration}% время действия стихийного урона (огня, коррозии, электричества или шлака) на вас."
                },
                {},
                {
                    num:3,
                    //name: "I'm the Juggernaut",
                    name: "Я - Джагернаут",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        damageReduction:4
                    },
                    //discription:"Kill Skill. Killing an enemy gives +{damageReduction}% Damage Reduction for a short time.",
                    discription:"Навык убийства. Убив врага, вы на несколько секунд снижаете +{damageReduction}% получаемый урон."
                }
            ],
            [
                {
                    num:4,
                    //name: "Ain't Got Time To Bleed",
                    name: "Некогда Истекать Кровью",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        regenerate:0.8
                    },
                    //discription:"While Gunzerking you regenerate up to +{regenerate}% of your Maximum Health per second per level depending on how low your health is.",
                    discription:"Во время действия навыка 'Стрельба с двух рук', ваше +{regenerate}% здоровье восстанавливается. Чем ниже уровень здоровья, тем сильнее восстановление."
                },
                {
                    num:5,
                    //name: "Fistful of Hurt",
                    name: "Пригоршня Боли",
                    lvl:0,
                    maxLvl:1,
                    calc:{
                    },
                    //discription:"Melee Override. Throw a heavy punch dealing massive damage and knockback. Has a cooldown of 15 seconds.",
                    discription:"Навык ближнего боя. Нажмите клавишу ближнего боя, чтобы вложить в удар вес всего тела и нанести огромный урон врагу, отбросив его назад. У навыка 'Пригорошня боли' есть время восстановления, в течение которого нажатие клавиши приводит к обычной атаке в ближнем бою."
                },
                {
                    num:6,
                    //name: "All Out of Bubblegum",
                    name: "Жвачка Закончилась",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        fireRate:5
                    },
                    //discription:"+{fireRate}% Fire Rate per level when shield is depleted.",
                    discription:"Повышает +{fireRate}% скорострельность, если у ваших щитов закончилась энергия."
                }
            ],
            [
                {
                    num:7,
                    //name: "Bus That Can't Slow Down",
                    name: "Неостановимый Автобус",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        movementSpeed:10
                    },
                    //discription:"+{movementSpeed}% Movement Speed per level while Gunzerking.",
                    discription:"Повышает +{movementSpeed}% скорость передвижения во время действия навыка 'Стрельба с двух рук'."
                },
                {
                    num:8,
                    //name: "Just Got Real",
                    name: "Реализм",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        gunDamage:8
                    },
                    //discription:"Up to +{gunDamage}% Gun Damage per level depending on how low your health is.",
                    discription:"Повышает +{gunDamage}% урон, который вы наносите при стрельбе. Чем ниже ваш уровень здоровья, тем сильнее эффект."
                },
                {

                }
            ],
            [
                {
          
                },
                {
                    num:9,
                    //name: "Sexual Tyrannosaurus",
                    name: "Получай!",
                    lvl:0,
                    maxLvl:5,
                    calc:{
                        regeneration:0.4
                    },
                    //discription:"Taking damage gives +{regeneration}% Health Regeneration per level for 5 seconds. This effect does not stack.",
                    discription:"Получаемый урон дает +{regeneration}% восстановление здоровья на 5 секунд. Не накапливается."
                },
                {

                }
            ],
            [
                {
          
                },
                {
                    num:10,
                    //name: "Come At Me, Bro",
                    name: "Стреляй Дальше",
                    lvl:0,
                    maxLvl:1,
                    calc:{
                        fireRate:88,
                        reloadSpeed:25
                    },
                    //discription:"While Gunzerking, you can press [Action Skill] to taunt your enemies into attacking you. You instantly heal to Full Health and gain massive damage reduction for a few seconds.",
                    discription:"Усиление активного навыка. Пока действует навык 'Стрельба с двух рук', нажмите клавишу ближнего боя, чтобы раздразнить врагов и немедленно повысить уровень здоровья до максимума. Разозленные враги, скорее всего, нападут на вас, однако в течение следующих нескольких секунд наносимый ими урон будет значительно снижен."
                },
                {

                }
            ]
        ]
    }
    }
}