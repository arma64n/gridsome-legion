<template>
  <div>
    <g-image
      :src="require(`!!assets-loader!@/assets/clubs/${logo}.png`)"
      class="logo"
      :class="{ 'logo--small': small }"
    ></g-image>
  </div>
</template>

<script>
export default {
  name: "match-logo",
  props: {
    opponent: String,
    small: Boolean,
  },
  computed: {
    logo() {
      switch (this.opponent) {
        case "Ак–Булак":
          return "akb";
        case "Акжайык":
          return "akz";
        case "Биик":
          return "bii";
        case "Булат":
          return "bul";
        case "ЦСКА":
          return "csk";
        case "Экибастуз":
        case "Батыр":
          return "eki";
        case "Экибастузец":
          return "ekz";
        case "Энергетик-2":
          return "ene";
        case "Гефест":
          return "gef";
        case "Цесна":
          return "tse";
        case "Русенборг":
          return "rus";
        case "Олимпи":
          return "oli";
        case "Иле–Саулет":
          return "ile";
        case "Каспий":
          return "kas";
        case "Кайсар":
          return "kay";
        case "Кыран":
          return "kyr";
        case "Мегаспорт":
          return "meg";
        case "Кызылжар":
          return "kyz";
        case "Есиль–Богатырь":
          return "esb";
        case "Лашын":
          return "las";
        case "Махтаарал":
          return "mak";
        case "Окжетпес":
          return "okz";
        case "Есиль":
          return "esi";
        case "Казахмыс":
          return "kaz";
        case "Спартак":
          return "spa";
        case "Сункар":
          return "sun";
        case "Восток":
          return "vos";
        case "Тобол":
          return "tob";
        case "Шахтер":
          return "sha";
        case "Кайрат":
        case "Кайрат–Академия":
          return "kai";
        case "Иртыш":
          return "irt";
        case "Актобе":
        case "Актобе–Жас":
          return "akt";
        default:
          return "nothing";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 6rem;
  height: 6rem;
  object-fit: contain;

  &--small {
    width: 3rem;
    height: 3rem;
    vertical-align: middle;
  }
}
</style>
