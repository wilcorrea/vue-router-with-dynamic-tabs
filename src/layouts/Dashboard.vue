<template>
  <div>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Vue Tabs</a>

      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <router-link class="nav-link" to="/auth/login">Sair</router-link>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <span class="nav-link" @click="open('/category', 'Category')">Category</span>
              </li>
              <li class="nav-item">
                <span class="nav-link" @click="open('/person', 'Person')">Person</span>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-10 col-lg-10 pt-3 px-4">
          <template v-if="tabs.length">
            <ul class="nav nav-tabs">
              <li
                v-for="(tab, key) in tabs"
                :key="`title-${key}`"
                class="nav-item"
              >
                <a
                  class="nav-link"
                  :class="{'active': selected === tab.name}"
                  @click="select(tab)"
                >
                  {{ tab.label }}
                  <span class="tab-closer" @click="close(tab, $event)">&times;</span>
                </a>
              </li>
            </ul>
            <div
              v-for="(tab, key) in tabs"
              :key="key"
              v-show="selected === tab.name"
              class="tab-content"
            >
              <Container :ref="tab.name" v-bind="tab"/>
            </div>
          </template>
          <div v-else class="text-center">
            <small>Selecione um item do menu lateral</small>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Container from '../components/Container'

export default {
  name: 'Dashboard',
  components: {
    Container
  },
  props: {
    base: {
      type: String,
      default: () => ''
    }
  },
  data: () => ({
    selected: '',
    last: '',
    counter: 0,
    tabs: []
  }),
  methods: {
    select (tab) {
      this.last = this.selected
      this.selected = tab.name
      if (!this.last) {
        this.last = this.selected
      }
      this.go(tab)
    },
    create (label, path) {
      this.counter++
      const name = 'tab-' + this.counter
      if (path.substring(0, 1) === '/') {
        /* eslint-disable no-param-reassign */
        path = path.substring(1)
      }
      return {
        path: `${this.base}/${name}/${path}`,
        name: name,
        label: label
      }
    },
    add (tab) {
      this.tabs.push(tab)
    },
    close (tab, $event) {
      $event.preventDefault()
      $event.stopPropagation()
      const index = this.tabs.findIndex(item => tab.name === item.name)
      this.tabs.splice(index, 1)
      const last = this.tabs.find(item => this.last === item.name)
      if (last) {
        this.select(last)
      }
    },
    open (path, label) {
      let tab = this.tabs.find(item => label === item.label)
      if (tab) {
        return this.select(tab)
      }
      tab = this.create(label, path)
      this.add(tab)
      this.select(tab)
      this.go(tab)
    },
    go (tab) {
      this.$router.push(tab.path)
    }
  },
  watch: {
    $route () {
      const name = this.$route.params.tab
      const index = this.tabs.findIndex(item => name === item.name)
      if (index >= 0) {
        this.tabs[index].path = this.$route.fullPath
      }
    }
  }
}
</script>

<style>
  .nav-link {
    cursor: pointer;
    position: relative;
    padding: 0.5rem 1.5rem !important;
  }

  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 48px;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .tab-content {
    padding: 30px 10px 0 10px;
  }

  .tab-closer {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2em 0.6em;
  }
</style>
