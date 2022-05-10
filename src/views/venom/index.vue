<template>
  <div class="p-4 text-center">
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        v-model="type"
        value="0"
        checked
      />
      <label class="btn btn-outline-success" for="btnradio1">基础</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
        v-model="type"
        value="1"
      />
      <label class="btn btn-outline-danger" for="btnradio2">进阶</label>
    </div>
    <div class="mt-2 p-2" style="height: 200px">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">本金</span>
        <input
          type="text"
          class="form-control"
          @blur="reckon"
          @input="reckon"
          v-model="principal"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">
          <span>利率</span>
          <span v-show="type == 1">1</span>
        </span>
        <input
          type="text"
          class="form-control"
          @blur="reckon"
          @input="reckon"
          v-model="rate"
        />
      </div>
      <div class="input-group mb-3" v-show="type == 1">
        <span class="input-group-text">
          <span>利率2</span>
        </span>
        <input
          type="text"
          class="form-control"
          @blur="reckon"
          @input="reckon"
          v-model="rate2"
        />
      </div>
    </div>
    <!-- 基础框 -->
    <div v-show="type == 0">
      <table class="table">
        <tbody>
          <tr>
            <td>投入</td>
            <th>{{ data1.t }}</th>
          </tr>
          <tr>
            <td>概率</td>
            <th>{{ data1.g }}%</th>
          </tr>
          <tr>
            <td>获利</td>
            <th>{{ data1.h }}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 进阶框 -->
    <div v-show="type == 1">
      <table class="table">
        <tbody>
          <tr>
            <td>投入1</td>
            <th>{{ this.data2.t1 }}</th>
          </tr>
          <tr>
            <td>投入2</td>
            <th>{{ this.data2.t2 }}</th>
          </tr>
          <tr>
            <td>获利2</td>
            <th>{{ this.data2.h2 }}</th>
          </tr>
          <tr>
            <td>总获利</td>
            <th>{{ this.data2.g }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 0,
      principal: "",
      rate: "0.",
      rate2: "0.",
      data1: {
        t: 0,
        g: 0,
        h: 0,
      },
      data2: {
        t1: 0,
        t2: 0,
        h1: 0,
        h2: 0,
        g: 0,
      },
    };
  },
  methods: {
    reckon() {
      this.reckon1();
      this.reckon2();
    },
    reckon1() {
      let num0 = parseFloat(this.principal);
      let num1 = parseFloat(this.rate);
      if (isNaN(num0) || isNaN(num1) || num0 <= 0 || num1 <= 0) return;
      let seat = 0.85;
      let p = 1 - num1 / seat / 2;
      let f = (p * num1 - (1 - p)) / num1;
      this.data1.t = (num0 * f).toFixed(2);
      this.data1.g = (p * 100).toFixed(2);
      this.data1.h = (num0 * f * num1).toFixed(2);
    },
    reckon2() {
      let num0 = parseFloat(this.principal);
      let num1 = parseFloat(this.rate);
      let num2 = parseFloat(this.rate2);
      if (isNaN(num0) || isNaN(num1) || num0 <= 0 || num1 <= 0) return;
      let that = this;
      this.data2.t1 = (num0 / (1 + num1)).toFixed(2);
      this.data2.t2 = (num0 - parseFloat(that.data2.t1)).toFixed(2);
      this.data2.h1 = (parseFloat(that.data2.t1) * num1).toFixed(2);
      this.data2.h2 = (parseFloat(that.data2.t2) * num2).toFixed(2);
      this.data2.g = (
        parseFloat(that.data2.h1) + parseFloat(that.data2.h2)
      ).toFixed(2);
    },
  },
};
</script>
<style lang="scss" scoped>
.p-3 {
  font-size: 16px;
}
.input-group-text {
  width: 70px;
  justify-content: center;
}
td {
  width: 120px;
}
th {
  text-align: right;
}
</style>